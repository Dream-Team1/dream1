import React from 'react';
import ReactDOM from "react-dom";
import Comments from "./FORO/Comments.js";
import Post from "./FORO/Post.js";
import List from "./FORO/List.js";
import $ from "jquery";

class Forum extends React.Component {
constructor(props){
  super(props);
  this.state = {
    posts: []
  };
  this.addComments =this.addComments.bind(this);
   this.getPost =this.getPost.bind(this);
}
  addComments(message1, message2){
   $.ajax({
     method: "POST",
      url: "/Forum",
     contentType: 'application/json',
     data: JSON.stringify({
       message1: message1,
       message2:message2
     })
   }).done(() => {
     this.getPost();
   });
 }
   getPost (){
    $.ajax({
      url: '/Forum',
      method: 'GET',
    success: (results) => {
      this.setState({posts:results});
      console.log( results);
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }
    componentDidMount(){
    this.getPost();
  }

  render (){
    return(
        <div>
          <Comments addPost={this.addComments} />
           <List posts={this.state.posts} />
         </div>
    )
  }
}

export default Forum;
