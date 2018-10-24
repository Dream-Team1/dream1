import React from 'react';
import InfoThings from "./infothings.jsx";
import "../../../../dist/invitation.css";


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
      <div className="invitacion">
      <img className="pic" src="https://i.imgur.com/JGGDTZg.png" />
      <center><h1 className="invitation">**You are invited!!**</h1></center>
        <center><h3 className="invitation2">This is an invitation to my party/event.</h3></center>
        <InfoThings info={this.state.info} /><br/><br/>
        <center><img className="pic2" src="https://i.imgur.com/ZPsYALl.png" /></center>


      </div>
    )
  }
}
export default Invitation;
