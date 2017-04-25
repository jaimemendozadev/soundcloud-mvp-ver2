var Playlist = require('../db/schema.js').Playlist;

module.exports = {
  getAllPlayLists: function(callback) {
    Playlist.find({}, function(err, allPlaylists){
      if (err){
        console.log("There was an err getting all the playlists ", err);
        callback(err, null);
      }

      callback(null, allPlaylists);
    });

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

  deleteAPlayList: function(playlistID, callback) {
    Playlist.findOneAndRemove(playlistID, function(err, deletedPlaylist){
      if(err){
        console.log("There was an error deleting the playlist from the DB", err);
        callback(err, null)
      }

      callback(null, deletedPlaylist);
      console.log("the playlist was deleted successfully inside the server ", deletedPlaylist);

    });

  }
}