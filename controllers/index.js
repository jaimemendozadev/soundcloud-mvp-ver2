var model = require('../models');

module.exports = {
  getAllPlayLists: function(req, res) {
    //res.send("controller.getAllPlayLists works");

    model.getAllPlayLists(function(err, allPlaylists){
      if(err){
        console.log("There was an err getting all the playlists ", err);
        res.status(404).send("There was an err getting all the playlists.");
      }

      res.status(201).send(allPlaylists);
    });

  },

  getAPlayList: function(req, res) {
    res.send("controller.getAPlayList works")
    
  },

  postAPlayList: function(req, res) {
    /* Please note, if songs array is an empty obj {},
    the new playlist document's songs key will be null */
    var newPlaylist = {
      title: req.body.title,
      songs: req.body.songs
    }




    model.postAPlayList(newPlaylist, function(err, savedPlaylist){
      if(err){
        console.log("There was an err saving the playlist to the db. ", err);
        res.status(404).send("There was an err saving the playlist to the database.");
      }

      res.status(201).send("Successfully saved a new playlist to the database")

    });



  },

  deleteAPlayList: function(req, res) {
    console.log("req.params is ", req.params.title);
    res.send("controller.deleteAPlayList works");

  }
}


/*
Checklist
Working routes/controllers
  -controller.getAllPlayLists
  -controller.postAPlayList 
    -postAPlayList successfully saves actual SoundCloud data to db
*/


