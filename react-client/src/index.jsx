import React from 'react';
import ReactDOM from 'react-dom';
import fire from './Fire.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Planer from "./planer.jsx";
import Home from "./homeQuinceañera.jsx";
import Navigation from "./links.jsx";
import Principal from "./principal.jsx"
import HomeWedding from "./homeWedding.jsx";
import HomeBautizo from "./homeBautizo.jsx";
import HomeKids from "./homeKids.jsx";
import HomeBaby from "./homeBaby.jsx";
import HomeFormal from "./homeFormal.jsx";
import HomeRandom from "./homeRandom.jsx";
import Main from "./Main.js";
import Login from "./LogIn.jsx";
import LogOut from './LogOut.js';

class App extends React.Component {

  render () {
    return (
      <BrowserRouter>
            <Switch>
              <Route   path="/login" component={Main}/>
              <Route exact path="/" component={Principal}/>
              <Route path="/quince" component={Home}/>
          
              <Route path="/wedding" component={HomeWedding}/>
              <Route path="/bautizo" component={HomeBautizo}/>
              <Route path="/kids" component={HomeKids}/>
              <Route path="/baby" component={HomeBaby}/>
              <Route path="/formal" component={HomeFormal}/>
              <Route path="/random" component={HomeRandom}/>

            </Switch>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
