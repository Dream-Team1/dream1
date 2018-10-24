import React from 'react';

class TodoItem extends React.Component  {
constructor(props){
  super(props);
}
removeTodo(id){
   this.props.removeTodo(id);
   console.log("remove is called");
 }

  render (){
    return(
      <div>
        <span>{this.props.todo.value1}</span><button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>

      </div>
   );
  }
}
export default TodoItem;
