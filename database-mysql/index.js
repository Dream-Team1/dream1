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

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.insertTodos = insertTodos;
module.exports.selectTodos = selectTodos;
