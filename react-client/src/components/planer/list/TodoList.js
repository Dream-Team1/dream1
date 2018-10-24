import React from 'react';
import TodoItem from './todoItem.js';

class TodoList extends React.Component  {
constructor(props){
  super(props);
  this.state ={

  }
  this.removeTodo=this.removeTodo.bind(this);
}
removeTodo(id){
  this.setState({
    todos: this.props.todos.filter((todo, index) => todo.id !== id)
  });
}
  render (){
    return(
      <div className="posts">
    {this.props.todos.map((todo) =>  <TodoItem todo={todo} key={todo.id} removeTodo={this.removeTodo}/>)}
   </div>
   );
  }
}
export default TodoList;
