import React from 'react';


const Post = (props) => (
  <div>
    <span className= "title1">{props.post.message1}</span>{" : "}<span className="con">{props.post.message2}</span>
  </div>
)

export default Post;
