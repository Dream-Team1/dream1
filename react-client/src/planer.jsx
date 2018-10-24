import React from 'react';
import TodoMain from "./components/planer/TodoMain.js";
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
        <center><h1 className="homeplaner">Lets start creating your invitations.</h1></center>
          <center><h1 className="homeplaner">Enter the information from the party here:</h1></center>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              <TodoMain />
              </div>
              <div className="col-md-6">
              <Calendar />
              </div>
              <div className="col-md-3">
              <PartyInfo />
              </div>
            </div>
            <div className="row">
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
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
