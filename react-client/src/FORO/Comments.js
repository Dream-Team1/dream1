import React from 'react';

class Comments extends React.Component  {
constructor(props){
  super(props);
  this.state = {
      message1:"",
      message2:""

  }
      this.add = this.add.bind(this);
  this.updateMessage1 = this.updateMessage1.bind(this);
  this.updateMessage2 = this.updateMessage2.bind(this);
}
updateMessage1(e){
  this.setState({
    message1: e.target.value
  })
}
updateMesagge2(e){
  this.setState({
    message2: e.target.value
  })
}
add(){
  this.props.addPost(this.state.message1 , this.state.message2);
  this.setState({
    message1:"",
    message2:""
  })
}





  render (props){
    reurn(
         <div className="callout secondary">
       <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" ref="commentForm" onSubmit={this.state.Comments}>
         <input type="text" ref="name" placeholder="Your Name" required/>
         <br />
         <textarea ref="desc" placeholder="Add your comment here" required/>

         <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
       </form>

     </div>
   );
  }

}




export default Comments;
