import React from 'react';

const EachInfo = (props) => (
  <div>
   <p>Host of the party:</p><br />
    <span className= "title1">{props.inf.name}</span><br />
    <p>I'll see you at:</p><br />
    <span className="con">{props.inf.address}</span><br/>
    <p>Details:</p>
    <span className="con">{props.inf.details}</span>

  </div>
)

export default EachInfo;
