import React from 'react';
import Info from "./partyInfo/info.js";


 class PartyInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: []
    };
    this.addInfo =this.addInfo.bind(this);
     this.getInfo =this.getInfo.bind(this);
  }
  addInfo(name, details,address){
   $.ajax({
     method: "POST",
      url: "/info",
     contentType: 'application/json',
     data: JSON.stringify({
       name: name,
       details:details,
       address:address
     })
   })
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
        <h1 className="partyinfo">this is the form</h1>
        <Info addPost={this.addInfo}/>
      </div>
    )
  }
}
export default PartyInfo;
