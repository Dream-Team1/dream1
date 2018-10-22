import React from "react";

class CommentPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comentario:""
    }
    this.agregar = this.agregar.bind(this);
  this.updateComentario = this.updateComentario.bind(this);
  }
  updateComentario(e){
  this.setState({
    comentario: e.target.value
  })
}
agregar(){
  this.props.commentPost(this.state.comentario);
  this.setState({
    comentario:""
  })
}
  render(){
    return(
      <div>
        <input className = "comentario" onChange = {this.updateComentario}
        value = {this.state.comentario}></input>
        <button className = "boton" onClick ={this.agregar}>Submit</button>
      </div>
    );
  }
};

export default CommentPost;
