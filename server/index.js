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
       console.log('eror conecting to the database');
       res.sendStatus(500);
       console.log(err);
     } else {
       res.status(200).json(results);
     }
   })
})
app.post('/Forum', function(req, res){

 let message1 = req.body.message1;
 let message2 = req.body.message2;

 if(!message1) {
   res.sendStatus(400);
 } else {
   database.insertOne(message1,message2,(err, results) => {
     if (err) {
       res.sendStatus(500);
      console.log("this is post", err)
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
