import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/bautizo.css"

class HomeBautizo extends React.Component {
  render () {
    return (
        <div className="bautizo">

            <Link className="planbautizo" to="/login">Plan a Party</Link>
            <center>
          <h1 className="homebautizo">Plan your baby a awesome bautizo</h1>
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
export default HomeBautizo;
