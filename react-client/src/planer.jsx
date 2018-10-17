import React from 'react';
import TodoList from "./components/planer/TodoList.js";
//import Share from "./components/planer/ShareNotification.js"
import PartyInfo from "./components/planer/partyInfo.js"
import Calendar from "./components/Calendar.jsx"



 class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
           <TodoList />
           <Calendar />
           <PartyInfo />
           </div>
    )
  }
}
export default Planer;
