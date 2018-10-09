import React from 'react';
import FooterPage from "./footer.js";
import Stars from './starRating.js';
import Forum from "./Forum.js";
import Uploader from "./Uploader/Uploader.js";



class Home extends React.Component {
  render () {
    return (
        <div>
          <h1>Main Home</h1>
          <Forum />
          <br/>
          <Uploader />
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
          <br/>
          <FooterPage />
        </div>

    )
  }
}
export default Home;
