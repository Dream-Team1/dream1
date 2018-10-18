import React from "react";
import CommentPost from "./commentPost.js";
import CommentList from "./commentList.js";


class ComentariosMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      respuestas:[]
    }
    this.addRespuesta = this.addRespuesta.bind(this);
    this.getRespuesta = this.getRespuesta.bind(this);
  }
addRespuesta(comentario){
 $.ajax({
   method: "POST",
   url: "/comentario",
   contentType: 'application/json',
   data: JSON.stringify({
     comentario: comentario
   })
 }).done(() => {
   this.getRespuesta();
 });
}
getRespuesta (){
  $.ajax({
  url: '/comentario',
  method: 'GET',
  success: (results) => {
    this.setState({respuestas:results});
  },
  error: (xhr, err) => {
    console.log('err', err);
    }
  })
}
componentDidMount(){
  this.getRespuesta();
}
  render(){
    return(
      <div>
        <CommentPost commentPost ={this.addRespuesta}/>
        <CommentList respuestas={this.state.respuestas}/>
      </div>
    );
  }
};

export default ComentariosMain;
