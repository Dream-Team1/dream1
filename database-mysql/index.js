var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode',
  database : 'dream1'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM comentarios', function(err, results, fields) {
    if(err) {
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

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
