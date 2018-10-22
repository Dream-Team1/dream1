var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database-mysql/index.js');


var app = express();
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/Forum', function(req, res){
  database.selectAll((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})
app.post('/Forum', function(req, res){

 let message1 = req.body.message1;
 let message2 = req.body.message2;

 if(!message1 && !message2) {
   res.sendStatus(400);
 } else {
   database.insertOne(message1,message2,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

//this are the requests for the todo pending tasks
app.get('todo', function(req, res){
  database.selectTodos((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})
app.post('/todo', function(req, res){

 let value1 = req.body.value1;

 if(!value1) {
   res.sendStatus(400);
 } else {
   database.insertTodos(value1,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

//this is for the rating system
app.post('/star', function(req, res){

 let val = req.body.val;

 if(!val) {
   res.sendStatus(400);
 } else {
   database.insertRating (val,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.get('/getRating', function(req, res){
  database.average((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})
//this is for info secction
app.post('/info', function(req, res){

 let name = req.body.name ;
 let details = req.body.details;
 let address = req.body.address;

 if(!name && !details && !address) {
   res.sendStatus(400);
 } else {
   database.insertInfo (name,details,address,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.get('/info', function(req, res){
  database.selectInfo((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})
//this is for the comments per post on the Forum
app.post('/comentario', function(req, res){

 let comentario = req.body.comentario;
 let comentarios_com_id = req.body.comentarios_com_id;
 console.log(comentarios_com_id);

 if(!comentario && !comentarios_com_id) {
   res.sendStatus(400);
 } else {
   database.insertComentario (comentario,comentarios_com_id,(err, results) => {
     if (err) {
       res.sendStatus(500);
       console.log("this is 500", err);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.get('/comentario', function(req, res){
  database.selectComentario((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
});
app.get('/respuesta', function(req, res){
  database.joined((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
       console.log(results);
     }
   })
})



app.listen(3000, function() {
  console.log('listening on port 3000!');

});

module.exports = app;
