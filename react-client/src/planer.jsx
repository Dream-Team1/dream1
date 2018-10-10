import React from 'react';
//import Maps from "./components/planer/map.js";
import TodoList from "./components/planer/TodoList.js";


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
