//Import the mongoose module
var mongoose = require('mongoose');
var config = require('../config.js');

//Set up default mongoose connection
var mongoDB = `mongodb://${config.dbuser}:${config.dbpassword}@ds117251.mlab.com:17251/readio_db`;
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function(){
  console.log('Successfully connected to DB.');
})

module.exports = db;