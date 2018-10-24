import React from 'react';

class AddTodos extends React.Component  {
constructor(props){
  super(props);
  this.state = {
      value1:""
        }
  this.addValue = this.addValue.bind(this);
  this.updateValue1 = this.updateValue1.bind(this);
  }
updateValue1(e){
  this.setState({
    value1: e.target.value
  })
}

addValue(){
  this.props.addTodos(this.state.value1);
  this.setState({
    value1:""
  })
}
  render (){
    return(
      <div>
        <input className="inputbox" onChange={this.updateValue1} value={this.state.value1}></input>
        <button  onClick={this.addValue}>Submit</button>
     </div>
   );
  }
}
export default AddTodos;
