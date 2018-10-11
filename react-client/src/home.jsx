import React from 'react';
import ReactDOM from 'react-dom';
import FooterPage from "./components/footer.js";
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import Example from "./components/Calendar.jsx"

class Home extends React.Component {

  render () {
    return (
        <div>
        <Example />
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
export default Home;
