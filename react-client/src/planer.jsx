import React from 'react';
import Maps from "./planer/map.js";
import TodoList from "./planer/TodoList.js";
<<<<<<< HEAD
import Calendar from "./Calendar/indexCalendar.js";
=======
//import Cal from "./planer/calendar.js"
>>>>>>> master

class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
<<<<<<< HEAD
            <div className="row">
           <div className="col-sm-7"><Maps /></div>
           <div className="col-sm-5"><TodoList /></div>
           <Calendar />
=======
        <div className="row">
           <div className="col-sm-5"><Maps /></div>
           <div className="col-sm-7"><TodoList /></div>

>>>>>>> master
         </div>

           </div>
    )
  }
}
export default Planer;
