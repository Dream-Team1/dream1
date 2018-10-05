import React from 'react';
import FooterPage from "./footer.js";
import Forum from "./Forum.js"


class Home extends React.Component {
  render () {
    return (
        <div>
          <h1>Main Home</h1>
          <Forum />
          <FooterPage />
        </div>

    )
  }
}
export default Home;
