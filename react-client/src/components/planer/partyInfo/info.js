import React from 'react';

class Info extends React.Component  {
constructor(props){
  super(props);
  this.state = {
      name:"",
      details:"",
      address:""
  }
  this.add = this.add.bind(this);
  this.updateName = this.updateName.bind(this);
  this.updateDetails= this.updateDetails.bind(this);
  this.updateAddress= this.updateAddress.bind(this)
}
updateName(e){
  this.setState({
    name: e.target.value
  })
}
updateDetails(e){
  this.setState({
    details: e.target.value
  })
}
updateAddress(e){
  this.setState({
    address: e.target.value
  })
}
add(){
  this.props.addPost(this.state.name, this.state.details, this.state.address);
  this.setState({
    name:"",
    details:"",
    address:""
  })
}
  render (){
    return(
      <div>
       <p>Name of party owner:</p>
       <input className="inputbox"  onChange={this.updateName} value={this.state.name}></input>
        <br />
        <br />
        <p>Party Details:</p>
       <textarea className="areatext" onChange={this.updateDetails} value={this.state.details}></textarea>
       <p>Party address:</p>
      <textarea className="areatext" onChange={this.updateAddress} value={this.state.address}></textarea>
      <button className="infobutton" onClick={this.add}>submit</button>
     </div>
   );
  }
}
export default Info;
