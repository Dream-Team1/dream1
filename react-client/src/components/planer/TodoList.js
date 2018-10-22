import React,{Component} from "react";
import TodoInput from "./list/TodoImput.js";
import TodoItem from "./list/todoItem.js";

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {id:0, text:"Order cake"},
        {id:1, text:"Look for outfit"}
      ],
      nextId:2
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
        <h4 className="todolist">Enter your pending tasks</h4>
        <TodoInput  todoText="" addTodo={this.addTodo}/>
        <ul>
        {this.state.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
