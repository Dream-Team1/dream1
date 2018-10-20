import React from 'react';
import {Link} from 'react-router-dom';
import TodoList from "./components/planer/TodoList.js";
import PartyInfo from "./components/planer/partyInfo.js"
import Calendar from "./components/Calendar.jsx"
import Fire from './Fire.js';


 class Planer extends React.Component {
constructor(props) {
      super(props);

  }

  render () {
    return (
        <div>
            <button><Link to='/'>Logout</Link></button>


          <h1>this is the planner</h1>
           <TodoList />
           <Calendar />


           <PartyInfo />
           </div>
    )
  }
}
export default Planer;
