import React from "react";
import CommentPost from "./commentPost.js";


class ComentariosMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      com_foreignKey: this.props.postID,
      joined:[],
      respuestas:undefined,
      preguntas:undefined,
      preguntasArr: []

    }
    this.addRespuesta = this.addRespuesta.bind(this);
    this.getJoined = this.getJoined.bind(this);
    this.renderReplyPosts = this.renderReplyPosts.bind(this);
  }

renderReplyPosts() {
    var arr = [];
    for(var key in this.state.respuestas){
     arr.push([key, this.state.respuestas[key]])
   }
   this.setState({
     preguntasArr:arr
   });
  }

addRespuesta(comentario){
 $.ajax({
   method: "POST",
   url: "/comentario",
   contentType: 'application/json',
   data: JSON.stringify({
     comentario: comentario,
     comentarios_com_id: this.state.com_foreignKey,
     objeto: undefined,
     uno:undefined,
     dos:undefined
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
   }).then(joined=>{
    var newObj={}
    for(var i=0; i < joined.length; i++){
    if(newObj[joined[i].message1] === undefined) {
      newObj[joined[i].message1] = [joined[i].comentario]
    } else {
      newObj[joined[i].message1].push(joined[i].comentario)
    }
  }
    this.setState({respuestas:newObj})
    this.renderReplyPosts()
  })
}



// var temp =0;
// for(var i=0; i<this.state.joined.length; i++){
//  if(temp < this.state.joined[i].com_id) {
//      temp = this.state.joined[i].com_id;
//   let pregunta =this.state.joined[i].message1;
//   return(<h4>{pregunta}</h4>)
//      if (this.state.joined[i].com_id !== undefined) {
//         let respuesta=this.state.joined[i].comentario;
//         return(<h4>{respuesta}</h4>)
//      }
//  }
//  else
// respuesta=this.state.joined[i].comentario;
// return(<h4>{respuesta}</h4>)
// }

componentDidMount(){
  this.getJoined();
}
  render(){
console.log('pregunta',this.state.preguntasArr)
console.log("respuestas",this.state.respuestas)
    return(
      <div>
      { this.state.preguntasArr.map((pregunta) =>
        pregunta.map((hibrido) =>
      <p className="questions">{hibrido}</p>))}
      <CommentPost commentPost={this.addRespuesta}/>
      </div>
    );
  }
};

export default ComentariosMain;
