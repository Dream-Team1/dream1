import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/wedding.css";
import ComentariosMain from "./components/FORO/comments/commentsMain.js"

class HomeWedding extends React.Component {
  render () {
    return (
        <div className="wedding">

            <Link to="/login">Plan a Party</Link>
            <center>
          <h1 className="boda">Let's plan our wedding!</h1>
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
export default HomeWedding;
