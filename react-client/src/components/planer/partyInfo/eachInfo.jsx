import React from 'react';

const EachInfo = (props) => (
  <div>
      <center><h3 className="title1">{props.inf.title}</h3></center>
   <center><h3 className="invi2">Host of the party:</h3></center>
    <center><span className= "con1">{props.inf.name}</span></center>
    <center><h3 className="invi2">I'll see you at:</h3></center>
    <center><span className="con1">{props.inf.address}</span></center>
    <center><h3 className="invi2">Details:</h3></center>
    <center><span className="con1">{props.inf.details}</span></center>

  </div>
)

export default EachInfo;
