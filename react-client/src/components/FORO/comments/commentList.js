import React from 'react';
import CommentItem from './commentItem.js';

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
console.log(this.props.com_foreignKey)
    let replies = this.props.respuestas.map((respuesta) =>

{    if(respuesta.comentarios_com_id === this.props.com_foreignKey)
  return
       <CommentItem respuesta={respuesta} key={respuesta.id}/>
})


    return (
      <div>
       { replies }
      </div>
    )
  }
}

export default CommentList;
