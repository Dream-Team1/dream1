// import React from 'react';
//
// class TodoItem extends React.Component  {
// constructor(props){
//   super(props);
// }
// removeTodo(id){
//    this.props.removeTodo(id);
//    console.log("remove is called");
//  }
//
//   render (){
//     return(
//       <div>
//         <span>{this.props.todo.value1}</span><button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>
//
//       </div>
//    );
//   }
// }
// export default TodoItem;

import React from "react";

class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }


  removeTodo(id){
    this.props.removeTodo(id);
  }
  render(){
    return(
      <div className="todoItem">
      <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button>{this.props.todo.text}
      </div>
    )
  }
}
export default TodoItem;
