import React from 'react';
import InfoThings from "./infothings.jsx"



class Invitation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <p>This is your Invitation, </p>
        <p>send it to your friends!!!</p>
        <InfoThings info={props.info} />

      </div>
    )
  }
}
export default Invitation;
