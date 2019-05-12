var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'wrf_user',
  password : 'password',
  database : 'testing'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;