var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  console.log("Listening on port 3000");
})