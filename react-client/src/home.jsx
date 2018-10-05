import React from 'react';
import FooterPage from "./footer.js";
import Stars from './starRating.js';

class Home extends React.Component {
  render () {
    return (
        <div>
        <Stars />
          <h1>Main Home</h1>
          <FooterPage />
        </div>

    )
  }
}
export default Home;
