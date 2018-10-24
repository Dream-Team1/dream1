import React from 'react';

const EachInfo = (props) => (
  <div>
      <span className="con">{props.inf.title}</span><br /><br /><br />
   <p>Host of the party:</p>
    <span className= "title1">{props.inf.name}</span><br /><br /><br />
    <p>I'll see you at:</p>
    <span className="con">{props.inf.address}</span><br /><br /><br />
    <p>Details:</p>
    <span className="con">{props.inf.details}</span>

  </div>
)

export default EachInfo;
