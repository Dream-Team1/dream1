import React from 'react';
import TodoList from "./components/planer/TodoList.js";
import DateTime from "./components/planer/date.js"
import Calendar from "./components/Calendar.jsx"


 class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>

           <TodoList />
           <Calendar />


           </div>
    )
  }
}
export default Planer;
