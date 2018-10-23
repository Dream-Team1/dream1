import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/baby.css"


class HomeBaby extends React.Component {
  render () {
    return (
        <div className="baby">
            <Link to="/planer">Plan a Party</Link>
            <center><h1>START PLANNING</h1></center>
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
export default HomeBaby;
