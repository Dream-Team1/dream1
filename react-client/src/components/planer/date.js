import React from 'react';

class DateTime extends React.Component {

  render () {
    return (
      <div>
        <p>when is the party happening?</p>
        <form action="/action_page.php">
          Date and Time:
          <input type="datetime-local" name="bdaytime"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }
}
export default DateTime;
