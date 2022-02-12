const express = require('express');
const routes = require('./routes/index.js');
const server = express();
const mysql = require('mysql');
const conn = require('express-myconnection');
const bodyParser = require('body-parser')
server.use(bodyParser.json()) 

const dbOptions = {

    host : 'localhost',
    port : 3306,
    user : 'root',
    database:'bluecorner',
    
}

server.use(conn(mysql,dbOptions,'single'))


server.use('/', routes);

// Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

module.exports = server;
