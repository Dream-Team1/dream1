import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from "./Fire.js";
import "../dist/login.css";

class Login extends Component {
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
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).catch((error) => {
      console.log(error);
    });
    console.log("this is login called");
}

signup(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).then((u)=>{console.log(u)})
  .catch((error) => {
      console.log(error);
    })
}
render() {
  return (
   <div className="loginbackground">

    <div className="container">
    <div className="row">
    </div>
    <br/>
    <br/>
    <center><h1 className="loginn">Login to continue planning your party!!</h1></center>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row">
    <div className="col-md-3"></div>
     <div className="col-md-6">
     <form>
    <div className="form-group">
     <label htmlFor="exampleInputEmail1">Email address</label>
     <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
     <small id="emailHelp" className="form-text text-muted"></small>
    </div>
     <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button className="infobutton" type="submit" onClick={this.login}>Login</button>
    <button className="infobutton" onClick={this.signup} style={{marginLeft: '25px'}}>Signup</button>
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
     </div>
    </div>
    </div>
   </div>
  );
}
}
export default Login;
