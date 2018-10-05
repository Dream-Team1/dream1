import React from 'react';
import Post1 from './Post.js';


const List = (props) => (
    <div className="posts">
 {props.posts.map((post) =>  <Post1 post={post} key={post.id}/>)}
 </div>
);

export default List;
