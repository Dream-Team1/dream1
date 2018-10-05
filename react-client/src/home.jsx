import React from 'react';
import FooterPage from "./footer.js";
import Stars from './starRating.js';
import Forum from "./Forum.js";
import Face from './share.js'


class Home extends React.Component {
  render () {
    return (
        <div>
          <h1>Main Home</h1>
          <Forum />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Stars />
          <br/>
          <Face />
          <br/>
          <FooterPage />
        </div>

    )
  }
}
export default Home;
