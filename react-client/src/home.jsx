import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";


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
          <Main />
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
