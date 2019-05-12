const express = require('express')
const app = express()
const port = 2999

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'wrf_admin',
  password: 'password',
  database: 'testing'
});

// connect to database
mc.connect();

app.listen(port, () => console.log(`API server started on: ${port}!`))

var routes = require('./app/routes/routes'); //importing route
routes(app); //register the route