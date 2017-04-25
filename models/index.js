var Playlist = require('../db/schema.js').Playlist;

module.exports = {
  getAllPlayLists: function(callback) {
    

  },

  getAPlayList: function(playlistID, callback) {
    

  },

  postAPlayList: function(newPlaylist, callback) {
    Playlist.create(newPlaylist, function(err, savedPlaylist){
      if(err){
        console.log("There was an error", err);
        callback(err, null)
      }

      callback(null, savedPlaylist)

    });

  },

  deleteAPlayList: function(callback) {

  }
}