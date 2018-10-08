var express = require('express');
var bodyParser = require('body-parser');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var database = require('../database-mysql/index.js');


var app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'imageFile');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(fileUpload());

 app.use(express.static(__dirname + '/../react-client/dist'));
 app.use('/Uploader', express.static(__dirname + '/../react-client/dist'));


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
app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (!err) {
       res.sendstatus(500);

    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





app.listen(3000, function() {
  console.log('listening on port 3000!');

});

module.exports = app;
