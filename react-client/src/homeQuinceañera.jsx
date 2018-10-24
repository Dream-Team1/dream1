import React from 'react';
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/quinceañera.css";
import { SocialIcon } from "react-social-icons";


class Home extends React.Component {

  render () {
    return (
        <div className="quinceañera">

            <Link className="planquinceañera" to="/login">Plan a Party</Link>
            <center><h1 className="quinceañeraa">My Quinceañera</h1></center>
            <h3 className="text">Find the most rated place to buy your party needs:</h3>
              <Main />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Forum />
              <div className ="leftSideBar">
              <ul>
              <li>
                <SocialIcon
                  network="twitter"
                  color="#00aced"
                  url="https://twitter.com/?lang=en"
                /></li>
                <li>
                <SocialIcon
                  network="facebook"
                  color="#3b5998"
                  url="https://www.facebook.com/code.dreamteam.5"
                /></li>
                <li>
                <a href="mailto:dreamteam2018hc@gmail.com"> <SocialIcon
                 network="google"
                 color="#bc2a8d"

               /></a></li>
               </ul>
               </div>
               <h3 className="text">Dont forget to rate this page!!!</h3>
               <Stars />
        </div>

    )
  }
}
export default Home;
