import React from 'react';
import Info from "./partyInfo/info.js";


 class PartyInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.addInfo =this.addInfo.bind(this);
  }
  addInfo(name, details,address,title){
   $.ajax({
     method: "POST",
      url: "/info",
     contentType: 'application/json',
     data: JSON.stringify({
       name: name,
       details:details,
       address:address,
       title:title
     })
   })
 }

  render () {
    return (
      <div>
        <center><h1 className="partyinfo7">Fill this in with the information of the party</h1>
        <Info addPost={this.addInfo}/></center>
      </div>
    )
  }
}
export default PartyInfo;
