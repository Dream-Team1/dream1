import React from 'react';
import Maps from "./planer/map.js";
import TodoList from "./planer/TodoList.js";

class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
          <Maps />
          <TodoList />
        </div>

    )
  }
}
export default Planer;
