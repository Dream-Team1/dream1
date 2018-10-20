import React from 'react';
import CommentItem from './commentItem.js';


class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.cortar=this.cortar.bind(this);
  }
  cortar(){
    var temp =0;
   for(var i=0; i<this.props.joined.length; i++){
      if(temp < this.props.joined[i].id) {
          temp = this.props.joined[i].id;
          console.log("-------------");
          return(this.props.joined[i])
      }
      else
          return(this.props.joined[i]);
   }
  }

  render(){
    return(
       <div>
       {this.joined}
      </div>
    )
  }
}


export default CommentList;
// {props.respuestas.map((respuesta) =>
//    <CommentItem respuesta={respuesta} key={respuesta.id}/>)}
