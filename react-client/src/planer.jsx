import React from 'react';
import TodoList from "./components/planer/TodoList.js";
import DateTime from "./components/planer/date.js"

class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
           <TodoList />
           <DateTime />



           </div>
    )
  }
}
export default Planer;
