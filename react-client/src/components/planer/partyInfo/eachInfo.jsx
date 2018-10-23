import React from 'react';

const EachInfo = (props) => (
  <div>
    <span className= "title1">{props.inf.name}</span><br />
    <span className="con">{props.inf.address}</span><br/>
    <span className="con">{props.inf.details}</span>

  </div>
)

export default EachInfo;
