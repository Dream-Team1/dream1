import React from 'react';
import Rating from 'react-rating';


class Stars extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      rating: '',
     }
   }

  render() {
    return(

    //  <link href="https://use.fontawesome.com/release/v5.0.8/css/all.css" rel="stylesheet">
      // <form target= "_self" method="GET">
      <div>
       <Rating className='Stars' onClick={this.state}
       caption='hello this is my caption!' totalStars={5} />

      <button type='submit' className='btn btn-primary'>Submit Rating</button>
      </div>
      // </form>
    )
  }
}
export default Stars;
