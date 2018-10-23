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
        <button><Link to='/'>Logout</Link></button>
        <center><h1 className="homeplaner">Lets start creating your invitations.</h1></center>
          <center><h1 className="homeplaner">Enter the information from the party here:</h1></center>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              <TodoList />
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
            </div>
          </div>
          <Link to="/invitation">Done</Link>
        </div>

    )
  }
}
export default Planer;
