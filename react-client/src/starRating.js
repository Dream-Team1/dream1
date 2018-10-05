import React from 'react';
import Rating from 'react-rating';


class Stars extends React.component {
  render() {
   return(
     <div>
       <Rating />
       <button type='submit' className="btn btn-primary">Submit Rating </button>
     </div>
   )
  }
}
export default Stars;
