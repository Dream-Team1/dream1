import React from 'react';
import TodoList from "./components/planer/TodoList.js";
//import Calendar from "./Calendar/indexCalendar.js";


class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>

            <div className="row">

           <div className="col-sm-5"><TodoList /></div>


         </div>

           </div>
    )
  }
}
export default Planer;
