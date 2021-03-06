import React from 'react';
import TodoList from "./components/planer/TodoList.js";
import PartyInfo from "./components/planer/partyInfo.js"
import Calendar from "./components/Calendar.jsx"
import fire from './Fire.js';
import "../dist/planer.css"
import {Link} from 'react-router-dom';

 class Planer extends React.Component {

  render () {
    return (
      <div className="planer">

        <Link className="outbutton" to='/'>Logout</Link>
        <center><h1 className="homeplaner1">Lets start creating your invitations.</h1></center>
          <center><h1 className="homeplaner1">Enter the information from the party here:</h1></center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              <TodoList />
              </div>
              <div id="cal"className="col-md-4">
              <Calendar />
              </div>
              <div className="col-md-4">
              <PartyInfo />
              </div>
            </div>
            <div className="row">
              <br /><br />
              <br /><br />                        
              <Link className="donebutton" to="/invitation">Done</Link>
            </div>
          </div>
        </div>

    )
  }
}
export default Planer;
