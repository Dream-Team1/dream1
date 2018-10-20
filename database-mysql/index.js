var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode',
  database : 'dreams'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM comentarios', function(err, results, fields) {
    if(err) {
      console.log("error en db")
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var insertOne = function(message1,message2, cb) {
 connection.query('INSERT INTO comentarios (message1, message2) VALUES (?, ?)',
   [message1, message2], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
// this are the requests for the todos

var selectTodos = function(callback) {
  connection.query('SELECT * FROM todos', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var insertTodos = function(value1, cb) {
 connection.query('INSERT INTO todos (value1) VALUES (?)',
   [value1], (err, results, fields) => {
     if(err) {
       console.log("this is database post")
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
//this is for the rating system
var insertRating = function(val, cb) {
 connection.query('INSERT INTO stars101 (val) VALUES (?)',
   [val], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};

var average = function(callback) {
  connection.query('SELECT AVG(val) FROM stars101', function(err, results, fields) {
    if(err) {
      console.log("error en db")
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
//this is for the info section
var selectInfo = function(callback) {
  connection.query('SELECT * FROM info', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var insertInfo = function(name,details,address, cb) {
 connection.query('INSERT INTO info (name,details,address) VALUES (?,?,?)',
   [name,details,address], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
//this is for the comments secction per post
var selectComentario = function(callback) {
  connection.query('SELECT * FROM respuestas', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var joined = function(callback) {
  connection.query('SELECT comentarios.com_id, respuestas.id FROM comentarios INNER JOIN respuestas ON comentarios.com_id = respuestas.comentarios_com_id;', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var insertComentario = function(comentario,comentarios_com_id, cb) {
 connection.query('INSERT INTO respuestas (comentario,comentarios_com_id) VALUES (?,?)',
   [comentario,comentarios_com_id], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};


module.exports.average = average;
module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.insertTodos = insertTodos;
module.exports.selectTodos = selectTodos;
module.exports.insertRating = insertRating;
module.exports.insertInfo = insertInfo;
module.exports.selectInfo = selectInfo;
module.exports.insertComentario=insertComentario;
module.exports.selectComentario =selectComentario;
module.exports.joined = joined;
