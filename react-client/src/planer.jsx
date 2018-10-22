import React from 'react';
import TodoList from "./components/planer/TodoList.js";
//import Share from "./components/planer/ShareNotification.js"
import PartyInfo from "./components/planer/partyInfo.js"
import Calendar from "./components/Calendar.jsx"
import fire from './Fire.js';
import "../dist/planer.css"


 class Planer extends React.Component {

  render () {
    return (
        <body className="planer">
        <div>
          <button><Link to='/'>Logout</Link></button>
          <center><h1 className="homeplaner">Let's Plan Your/My Party</h1></center>

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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        </body>
    )
  }
}
export default Planer;
