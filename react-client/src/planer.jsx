import React from 'react';
import TodoList from "./components/planer/TodoList.js";
import PartyInfo from "./components/planer/partyInfo.js"
import Calendar from "./components/Calendar.jsx"
import "../dist/planer.css"

 class Planer extends React.Component {

  render () {
    return (
        <body className="planer">
        <div>
          <h1>Let's Plan Your/My Party</h1>

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
          </div>
        </div>
        </body>
    )
  }
}
export default Planer;
