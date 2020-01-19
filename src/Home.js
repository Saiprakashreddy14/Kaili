import React, { Component } from 'react';
import fire from './config/Fire';
import ImageUpload from "./Components/ImageUpload"
import firebase from './config/Fire';
import './main.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            currentuser : ""
        }
    }
    logout() {
        fire.auth().signOut();
    }


    render() {
        
        return (
        <div>
           <div className="topbar"> 
          <h1 style={{color: "Brown"}}>Hello, welcome to Kaili </h1>       
         <p>Feel free to Leave Your Complaint here</p>
         </div>
 
                <div className="DottedBox">
                    <ImageUpload/>
                </div>
                <button onClick={this.logout} className="btn btn-warning" >Logout</button>
            </div>
        );

    }

}

export default Home;

