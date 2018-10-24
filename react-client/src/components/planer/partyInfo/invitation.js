import React from 'react';
import InfoThings from "./infothings.jsx"



class Invitation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info:[]
    };
    this.getInfo=this.getInfo.bind(this)
  }
  getInfo (){
   $.ajax({
     url: '/info',
     method: 'GET',
   success: (results) => {
     this.setState({info:results});
     console.log( results);
   },
   error: (xhr, err) => {
     console.log('err', err);
     }
   })
 }
   componentDidMount(){
   this.getInfo();
 }

  render () {
    return (
      <div>
        <p>You are invited!!</p><br /><br /><br />
        <p>This is an invitation to my party/event.</p><br /><br /><br />
        <InfoThings info={this.state.info} />

      </div>
    )
  }
}
export default Invitation;
