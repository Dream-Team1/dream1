import React from 'react';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
<<<<<<< HEAD:react-client/src/homeQuinceañera.jsx
import {Link} from 'react-router-dom';
=======
import Uploader from "./Uploader/Uploader.js";
>>>>>>> master:react-client/src/home.jsx

class Home extends React.Component {

  render () {
    return (
        <div>
            
            <Link to="/planer">Plan a Party</Link>
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
