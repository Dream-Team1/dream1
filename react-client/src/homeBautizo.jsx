import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';

class HomeBautizo extends React.Component {
  constructor(props) {
      super(props);

  }

  render () {
    return (
        <div>
          <Link to="/login">Plan a Party</Link>
          <h1>Main Home</h1>
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
