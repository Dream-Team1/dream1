import React from "react";
import CommentPost from "./commentPost.js";
import CommentList from "./commentList.js";


class ComentariosMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      com_foreignKey: this.props.postID,
      respuestas:[],
      joined:[]
    }
    this.addRespuesta = this.addRespuesta.bind(this);
    this.getRespuesta = this.getRespuesta.bind(this);
    this.getJoined = this.getJoined.bind(this);
  }
addRespuesta(comentario){
 $.ajax({
   method: "POST",
   url: "/comentario",
   contentType: 'application/json',
   data: JSON.stringify({
     comentario: comentario,
     comentarios_com_id: this.state.com_foreignKey
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

getJoined (){
  $.ajax({
  url: '/respuesta',
  method: 'GET',
  success: (results) => {
    console.log("this is results front",results);
    this.setState({joined:results});
  },
  error: (xhr, err) => {
    console.log('err', err);
    }
  })
}
componentDidMount(){
  this.getRespuesta();
  this.getJoined();
}

  render(){
    console.log("this is joined",this.state.joined);
    return(
      <div>
        <CommentPost commentPost ={this.addRespuesta}/>
        
      </div>
    );
  }
};

export default ComentariosMain;
