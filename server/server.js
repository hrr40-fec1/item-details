var express = require('express')
var app = express()
var port = 3000
var db = require('../db/index.js')


app.use(express.static('public'))

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log('Item details service listening on port' + port + '!')
});