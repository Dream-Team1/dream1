import React from 'react';
import ComentariosMain from "./comments/commentsMain.js";

const Post1 = (props) => (
  <div>
    <span className= "title1">{props.post.message1}</span>{" : "}<br/>
    <span className="con">{props.post.message2}</span><br/><br/>

  </div>
)

export default Post1;
//<ComentariosMain postID={props.post.com_id}/>
