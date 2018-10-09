import React, {component} from 'react';
import Calendar from './Calendar';

const style = {
  position: "relative",
  margin: "50px auto"
}

class appCalendar extends Component {
  onDayClick = (e, day) =>{
    alert(day);
  }

  render(){
    return (
      <div className="appCalendar">
        <Calendar style={style} width="302px"
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>
      </div>
    );
  }
}
export default appCalendar;
