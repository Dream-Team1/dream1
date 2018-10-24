// import React from 'react';
// import Remove from "./remove.jsx";
//
// const TodoItem = (props) => (
//   <div>
//     <span>{props.todo.value1}</span> <button>Remove</button>
//
//   </div>
// )
//
// export default TodoItem;

import React from 'react';

class TodoItem extends React.Component  {
constructor(props){
  super(props);
  this.state = {
  }
}

  render (){
    return(
      <div>
        <span>{this.props.todo.value1}</span> <button>Remove</button>

      </div>
   );
  }
}
export default TodoItem;
