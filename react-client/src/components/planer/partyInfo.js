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
        <h1 className="partyinfo">this is the form</h1>
        <Info addPost={this.addInfo}/>
      </div>
    )
  }
}
export default PartyInfo;
