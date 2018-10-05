import React from 'react';
import Comments from './Comments.js';


const List = (props) => (


    <div className="posts">
 {props.posts.map((post) =>  <Comments post={post} key={post.id}/>)}
 </div>


);

export default List;
