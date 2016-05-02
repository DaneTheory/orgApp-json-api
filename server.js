var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.configure(function() {
//     app.use(express.bodyParser());
// });


server.use('/api', router)

server.use(middlewares)
server.use(router)

app.listen(8000, function () {
  console.log('Express is up')
})


server.listen(8080, function () {
  console.log('JSON Server is running')
})
