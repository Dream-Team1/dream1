import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/quinceañera.css";


class Home extends React.Component {

  render () {
    return (
        <div className="quinceañera">

            <button><Link to="/login">Plan a Party</Link></button>
            <center>
          <h1 className="quinceañeraa">My Quinceañera</h1>
          </center>
          <Forum />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Main />
          <br/>
          <br/>
          <Stars />
          <br/>
          <br/>
          <FooterPage />
        </div>

    )
  }
}
export default Home;
