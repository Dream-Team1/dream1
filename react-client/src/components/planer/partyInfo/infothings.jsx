import React from 'react';
import EachInfo from './eachInfo.jsx';


const InfoThings = (props) => (
    <div className="info">
 {props.info.map((inf) =>  <EachInfo inf={inf} key={inf.id}/>)}
 </div>
);

export default InfoThings;
