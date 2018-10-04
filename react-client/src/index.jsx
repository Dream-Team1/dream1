import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Planer from "./planer.jsx";
import Home from "./home.jsx";
import Navigation from "./links.jsx";



class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/planer" component={Planer}/>
            </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
