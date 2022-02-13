const express = require('express');
const conn = require('express-myconnection');
const cors = require('cors')
const routes = require('./routes/index.js');
const server = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')

const dbOptions = {
    
    host : 'localhost',
    port : 3306,
    user : 'root',
    database:'bluecorner',
    
}
server.use(cors())

server.use(bodyParser.json()) 
server.use(conn(mysql,dbOptions,'single'))


server.use('/', routes);



module.exports = server;
