// import React from "react";
// import $ from "jquery";
// import AddTodos from "./list/addTodos.js";
// import TodoList from "./list/TodoList.js";
//
//
//
// class TodoInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       todos:[]
//     };
//     this.addTodos =this.addTodos.bind(this);
//     this.getTodos =this.getTodos.bind(this);
//   }
//   addTodos(value1){
//    $.ajax({
//      method: "POST",
//       url: "/todo",
//      contentType: 'application/json',
//      data: JSON.stringify({
//        value1:value1
//      })
//    }).done(() => {
//      this.getTodos();
//    });
//  }
//    getTodos (){
//     $.ajax({
//       url: '/todo',
//       method: 'GET',
//     success: (results) => {
//       this.setState({todos:results});
//     },
//     error: (xhr, err) => {
//       console.log('err', err);
//       }
//     })
//   }
//     componentDidMount(){
//     this.getTodos();
//   }
//   render(){
//     return(
//       <div className ="todoListMain">
//       <AddTodos addTodos={this.addTodos} />
//        <TodoList todos={this.state.todos} />
//       </div>
//     );
//   }
// }
//
// export default TodoInput;
import React,{Component} from "react";
import TodoInput from "./list/TodoInput.js";
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
        <h3 className="todos">Enter your pending tasks</h3>
        <TodoInput  todoText="" addTodo={this.addTodo}/>
        <ul className="eachTodo">
        {this.state.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
