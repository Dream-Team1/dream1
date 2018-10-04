import React,{Component} from "react";
import TodoInput from "./TodoImput.js";
import TodoItem from "./todoItem.js";

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {id:0, text:"make dinner"},
        {id:1, text:"make laundry"},
        {id:2, text:"learn to make react app"}
      ],
      nextId:3
    };
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }
  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id:this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }
  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }
  render(){
    return(
      <div className ="todoListMain">
        <h4>Enter your pending tasks</h4>
        <TodoInput  todoText="" addTodo={this.addTodo}/>
        <ul>
        {
        this.state.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
          })
        }
        </ul>
      </div>
    );
  }

}

export default TodoList;
