import React from 'react';
import {Link} from 'react-router-dom';
import "../dist/link.css"

 const Navigation = () => (
   <div>
<center className="heading">
 <h1>Ready to start planning the party of your dreams! </h1>
 <h2>Choose your event</h2>
</center>
     <div className="container">
      <div className="row">
        <div className="col-md-3">
        <h3 className="BabyShower"> Baby Shower </h3>
        <Link to="/baby"><img src="https://i.imgur.com/myLivaS.jpg" alt="Baby Showertheme" /><br/></Link>
        </div>
        <div className="col-md-3">
          <h3> Wedding </h3>
          <Link to="/wedding"><img src="https://i.imgur.com/MzzBCIn.jpg" alt="Weding party theme"  /><br/></Link>
        </div>
        <div className="col-md-3">
        <h3>Quinceañera </h3>
        <Link to="/quince"><img src="https://i.imgur.com/Pmx44D8.jpg" alt="Quinseañera party theme" /><br/></Link>
        </div>
        <div className="col-md-3">
        <h3> Kids Party </h3>
          <Link to="/kids"><img src="https://i.imgur.com/8zjnqVr.jpg" alt="Kids Party theme" /><br/></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        <h3> Formal Party </h3>
        <Link to="/formal"><img src="https://i.imgur.com/MoCFtRl.jpg" alt="Formal Party theme" /><br/></Link>
        </div>
        <div className="col-md-4">
        <h3> Bautizo </h3>
        <Link to="/bautizo"><img src="https://i.imgur.com/wIZWczQ.jpg" alt="Bautizo party theme" /><br/></Link>
        </div>
        <div className="col-md-4">
        <h3> Random </h3>
          <Link to="/random"><img src="https://i.imgur.com/SBWnBH9.jpg" alt="Random party theme" /><br/></Link>
        </div>
      </div>

    </div>

   </div>
 )
 export default Navigation;
