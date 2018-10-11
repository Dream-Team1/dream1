import React from 'react';
import TodoList from "./components/planer/TodoList.js";
import PartyInfo from "./components/planer/partyInfo.js"
class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
           <TodoList />

           <PartyInfo />
           </div>
    )
  }
}
export default Planer;
