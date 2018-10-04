import React from 'react';

class AddComments extends React.Component  {



  render(){
    return(
     <div className="callout secondary">
       <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>
         <input type="text" ref="name" placeholder="Your Name" required/>
         <br />
         <textarea ref="desc" placeholder="Add your comment here" required/>
         <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
       </form>

     </div>
    )
  }
}
export default AddComments;
