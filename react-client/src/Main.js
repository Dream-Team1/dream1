import React from 'react';
import ReactDOM from 'react-dom';
import fire from './Fire.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.jsx';
import Login from "./LogIn.jsx";
import LogOut from "./LogOut.js";
import Home from "./homeQuinceañera.jsx"
import Principal from './principal.jsx';
import Fire from './Fire.js';
import Planer from "./planer.jsx";



class Main extends React.Component {
 constructor(props){
   super(props);
   this.state =({
     user: null,
   });
   this.authListener = this.authListener.bind(this);

 }
 componentDidMount(){
   this.authListener();
 }
 authListener() {
   fire.auth().onAuthStateChanged((user) => {
     if(user){
       this.setState({user});
       localStorage.setItem('user', user.uid);
     }else{
       this.setState({user: null});
       localStorage.removeItem('user');
     }
   });
 }
 render () {
   return (

     <div>{this.state.user ?  ( <Planer />) : (<Login />) }</div>
   )
 }
}
export default Main;
