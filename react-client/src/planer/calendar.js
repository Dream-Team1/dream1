import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
//import 'react-day-picker/lib/style.css';

class Cal extends React.Component{
  constructor(props){
    super(props);
  }
 render(){
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}
}
export default Cal;
