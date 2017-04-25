var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbConnection = require('./index.js');
var autoIncrement = require('mongoose-auto-increment');




 
autoIncrement.initialize(dbConnection);
 
var PlaylistSchema = new Schema({
  title: String,
  songs: []
});

 
PlaylistSchema.plugin(autoIncrement.plugin, 'Playlist');

var Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = {
  Playlist: Playlist
}


