import React from "react";


class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value1:""
    };
    this.handleChange=this.handleChange.bind(this);
    this.addTodo=this.addTodo.bind(this);
    this.postTodo =this.postTodo.bind(this);
    this.getTodo =this.getTodo.bind(this);
    this.nose =this.nose.bind(this);
    this.two =this.two.bind(this);
  }
  handleChange(e){
    this.setState({value1: e.target.value});
  }
  addTodo(todo){
    if(todo.length > 0){
       this.props.addTodo(todo);
       this.setState({value1:""});
    }
  }
  postTodo(value1){
   $.ajax({
     method: "POST",
      url: "/todo",
     contentType: 'application/json',
     data: JSON.stringify({
       value1:this.state.value1
     })
   }).done(() => {
     this.getPost();
   });
 }
   getTodo (){
    $.ajax({
      url: '/todo',
      method: 'GET',
    success: (results) => {
      this.setState({todos:results});
      console.log( results);
    },
    error: (xhr, err) => {
      console.log('get on client', err);
      }
    })
  }
    componentDidMount(){
    this.getTodo();
  }
  nose(){
  this.addTodo(this.state.value1)
  }
  two(){
    this.nose();
    this.postTodo();
  }
  render(){
    return(
      <div className ="todoListMain">
        <input type="text" value={this.state.value1} onChange={this.handleChange}/>
        <button className="btn btn-primary" onClick={this.two}>Submit</button>
      </div>
    );
  }
}

export default TodoInput;
