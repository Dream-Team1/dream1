import React from 'react';
import Rating from 'react-rating';


class Stars extends React.Component {
   constructor(props) {
     super();
     this.state = {

     }

   }
   handleRating(val) {
     console.log("this is the rating change...", val)
     $.ajax({
       method: "POST",
        url: "/star",
       contentType: 'application/json',
       data: JSON.stringify({
          val: val
       })
     }).done(() => {
       this.getAverage();
     });
   }

   getAverage (){
    $.ajax({
      url: '/getRating',
      method: 'GET',
    success: (results) => {
    console.log("this is the results in the get request", results)
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }


  render() {
    return(

    //  <link href="https://use.fontawesome.com/release/v5.0.8/css/all.css" rel="stylesheet">
      // <form target= "_self" method="GET">
      <div>
    
       <Rating onChange={this.handleRating.bind(this)} />

      </div>
      // </form>
    )
  }
}
export default Stars;
