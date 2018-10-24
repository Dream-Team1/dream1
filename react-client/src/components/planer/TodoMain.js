import React from "react";
import $ from "jquery";
import AddTodos from "./list/addTodos.js";
import TodoList from "./list/TodoList.js";



class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos:[]
    };
    this.addTodos =this.addTodos.bind(this);
    this.getTodos =this.getTodos.bind(this);
  }
  addTodos(value1){
   $.ajax({
     method: "POST",
      url: "/todo",
     contentType: 'application/json',
     data: JSON.stringify({
       value1:value1
     })
   }).done(() => {
     this.getTodos();
   });
 }
   getTodos (){
    $.ajax({
      url: '/todo',
      method: 'GET',
    success: (results) => {
      this.setState({todos:results});
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }
    componentDidMount(){
    this.getTodos();
  }
  render(){
    return(
      <div className ="todoListMain">
      <AddTodos addTodos={this.addTodos} />
       <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoInput;
