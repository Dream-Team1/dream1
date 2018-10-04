import React from 'react';
import AddComments from "./FORO/Comments.js";
import PostComments from "./FORO/Post.js";
import List from "./FORO/List.js";
import $ from "jquery";

class Forum extends React.Component {
constructor(props){
  super(props);
  this.state = {
    posts: []
  }
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
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }
    componentDidMount(){
    this.getPost();
  }

  render (props){
    return(
        <div>

           <List posts={this.state.list} />


    </div>
    )
  }
}

export default Forum;
