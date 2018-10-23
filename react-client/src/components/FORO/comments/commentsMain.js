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
    this.getJoined = this.getJoined.bind(this);
    this.transform = this.transform.bind(this);
  }
addRespuesta(comentario){
 $.ajax({
   method: "POST",
   url: "/comentario",
   contentType: 'application/json',
   data: JSON.stringify({
     comentario: comentario,
     comentarios_com_id: this.state.com_foreignKey,
     objeto: undefined
   })
 }).done(() => {
   this.getRespuesta();
 });
}


getJoined (){
  $.ajax({
  url: '/respuesta',
  method: 'GET',
  success: (results) => {
    this.setState({joined:results});
  },
  error: (xhr, err) => {
    console.log('err', err);
    }
  })
}
componentDidMount(){
  this.getJoined();
}

// function array (arr)
// {
//  var newObj={}
// for(var i=0; i < arr.length; i++){
//
//  if(newObj[arr[i].message1] === undefined) {
//    newObj[arr[i].message1] = [arr[i].comentario]
//  } else {
//    newObj[arr[i].message1].push(arr[i].comentario)
//  }
// }
// return newObj;
// }

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
