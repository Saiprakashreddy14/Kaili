import React, { Component } from 'react'; 
import fire from './config/Fire';
import './Logform.css';
import './main.css'

 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    const varemail = this.state.email
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="mainHome" style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>

<nav class="colornav navbar navbar-expand-lg navbar-light bg-warning ">
  <a class="navbar-brand" href="#">KAILI</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About us</a>
      </li>
    </ul>
  </div>
</nav>
      <div class="loginform ">
        <div className="col-md-5" id="logform">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordhelp" placeholder="Password" />
                <small id="passwordhelp" class="form-text text-muted">New user ? Signup to Create an account</small>
              </div>
              <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
              <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


