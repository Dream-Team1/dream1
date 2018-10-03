import React from 'react';
import Forum from './Forum.js';
import Rating from 'react-rating';

class Home extends React.Component {

  render () {
    return (

          <div>
       <Forum />
        <div>
        <p> First test rating </p>
         <Rating />
        </div>
      </div>


    )
  }
}

export default Home;
