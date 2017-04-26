var express = require('express');
var app = express();
var cors = require('cors')
var router = require('./router');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)

app.listen(port, function(){
  console.log("Listening on port 3000");
})