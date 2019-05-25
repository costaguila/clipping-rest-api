var express = require('express');
var bodyParser = require('body-parser')
var db = require('./config/mongoDB');
var router = require('./routes/News')
console.log("# Conectando com a base de dados...")

db.connect();

var app = express();
app.use(bodyParser.json())

app.use('/',router)

/*Start serve*/
var server = app.listen('8080', function(){
  let host = server.address().address
  let port = server.address().port

  console.log("O servidor esta escutando em: http://%s:%s",host,port)
})
