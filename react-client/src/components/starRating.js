import React from 'react';
import Rating from 'react-rating';


class Stars extends React.Component {
   constructor(props) {
     super();
     this.state = {
        starRating: 0
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
      //results[0]["key"]
      //get the value inside the object
      var res = results[0]["AVG(val)"];
      this.setState({starRating:res});
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }

  render() {
    return(

      <div>

       <Rating onChange={this.handleRating.bind(this)} />
       <div className="num">{this.state.starRating}</div>

      </div>
      // </form>
    )
  }
}
export default Stars;
