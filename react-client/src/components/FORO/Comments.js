import React from 'react';

class Comments extends React.Component  {
constructor(props){
  super(props);
  this.state = {
      message1:"",
      message2:""
  }
  this.add = this.add.bind(this);
  this.updateMessage1 = this.updateMessage1.bind(this);
  this.updateMessage2 = this.updateMessage2.bind(this);
}
updateMessage1(e){
  this.setState({
    message1: e.target.value
  })
}
updateMessage2(e){
  this.setState({
    message2: e.target.value
  })
}
add(){
  this.props.addPost(this.state.message1, this.state.message2);
  this.setState({
    message1:"",
    message2:""
  })
}
  render (){
    return(
      <div>
      <p className="underh1">Are you looking for a service??
       post it here and you will start getting reponces from people</p>

       <p className ="textbox">Type of service:</p>
        <input className="box1" onChange={this.updateMessage1} value={this.state.message1}></input>
         <br />
         <br />
       <p className ="textbox">Description:</p>
       <textarea className="box2" onChange={this.updateMessage2} value={this.state.message2}></textarea>
      <button className="button2" onClick={this.add}>Submit</button>
     </div>
   );
  }
}
export default Comments;
