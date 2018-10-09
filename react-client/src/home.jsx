import React from 'react';
<<<<<<< HEAD
import FooterPage from "./footer.js";
import Stars from './starRating.js';
import Forum from "./Forum.js";
import Uploader from "./Uploader/Uploader.js";

=======
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
>>>>>>> master


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
          <br/>
          <FooterPage />
        </div>

    )
  }
}
export default Home;
