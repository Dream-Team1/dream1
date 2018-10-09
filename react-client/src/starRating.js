import React from 'react';
import Rating from 'react-rating';


class Stars extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      rating: 5,
      hover: null
     this.handleSubmit = this.handleSubmit.bind(this)
     }
   }
   handleSubmit() {
     this.handleSubmit =
   }

  render() {
    return(

    //  <link href="https://use.fontawesome.com/release/v5.0.8/css/all.css" rel="stylesheet">
      // <form target= "_self" method="GET">
      <div>
       <Rating />

      <button r = 'fa fa-star' type='submit' className='btn btn-primary'>Submit Rating</button>
      </div>
      // </form>
    )
  }
}
export default Stars;
