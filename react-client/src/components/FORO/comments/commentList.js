import React from 'react';
import CommentItem from './commentItem.js';


const CommentList = (props) => (
 <div className="posts">
 {props.respuestas.map((respuesta) =>
    <CommentItem respuesta={respuesta} key={respuesta.id}/>)}
 </div>
);

export default CommentList;
