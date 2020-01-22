import React, { Component } from 'react';
import firebase, { storage } from '../config/Fire';
import { databaseref } from '../config/Fire'
import '../Logform.css';
import '../main.css';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const fireuser = firebase.auth().currentUser.email;
      const uploadTask = storage.ref(`${fireuser}/${image.name}`).put(image);
            uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
      storage.ref(`${fireuser}/${image.name}`).getDownloadURL().then(url => {
            console.log("Url Here : ");
            console.log(url);



            this.setState({url});
            const ref = image.name;
            databaseref.ref(fireuser.split('@')[0]).child(ref.split('.')[0]).set({
              link : url,
              isExplicit : 0,
              reason : 'None'
            });        
         })
    });
  }
  render() {
    const style = {       
    };
    return (
      <div className="upload">        
        <input type="file" className="give" onChange={this.handleChange} />
            
        <button onClick={this.handleUpload} className="btn btn-success" > Upload</button>
        <div>
          <br/>
        <h6>Progress is : {this.state.progress} </h6>
        <progress value={this.state.progress} max="100" />
        </div>
        <img src={this.state.url || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+BsXsAAEee23DAAAAAElFTkSuQmCCBsXsAAEee23DAAAAAElFTkSuQmCC"} alt="Waiting for Upload ..." height="300" width="400"/>
        
      </div>
      // 'http://via.placeholder.com/400x300'
  )
  }
}
export default ImageUpload;