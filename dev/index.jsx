import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Search from './search.jsx';
import SearchView from './SearchView/SearchView.jsx';
import SongQueueView from './SongQueueView/SongQueueView.jsx'
const helper = require('./helpers/index.jsx');
const scConfig = require('../config.js');


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        playSong: null,
        searchResults: [],
        songQueue: [],
        idOfSongInPlayer: null,
        backupSong: 'https://soundcloud.com/fly-eye/awooga-1'
      }
      
      //App Methods
      this.handleSearch = this.handleSearch.bind(this);
      this.getListOfSearchResults = this.getListOfSearchResults.bind(this);
      this.createPlaylistFromSongQueue = this.createPlaylistFromSongQueue.bind(this);

      //ListItem callbakcs
      this.addToSongQueue = this.addToSongQueue.bind(this);
      this.removeFromQueue = this.removeFromQueue.bind(this);
      this.clickToPlaySong = this.clickToPlaySong.bind(this);
      this.playSongFromQueue = this.playSongFromQueue.bind(this);

      this.cbObj = {
        createPlaylist: this.createPlaylistFromSongQueue,
        remove: this.removeFromQueue,
        clickToPlay: this.clickToPlaySong,
      }


    }

    
    /*********************
     * App Methods
     *********************/
    handleSearch(string){      
      helper.axiosGET(this.getListOfSearchResults, string);
    }

    getListOfSearchResults(response){
      var listOfSearchResults = [];
      var songObj = response.data.collection;

      if(songObj.length > 0) {
        songObj.forEach((song) => {

          listOfSearchResults.push(song);
        });
      }

      this.setState({
        searchResults: listOfSearchResults
      });
    }

    createPlaylistFromSongQueue(playlistName){
      console.log("inside createPlaylistFromSongQueue");


      var newPlaylist = {
        title: playlistName,
        songs: this.state.songQueue
      }

      console.log("newlycreated playlist is ", newPlaylist);

      helper.axiosPOSTPlaylist(newPlaylist);


    }




    /*********************
     * ListItem callbacks
     *********************/
    addToSongQueue(song){
      var newQueue = this.state.songQueue;
      newQueue.push(song);

      this.setState({
        songQueue: newQueue,
      });

    }


    /*Note:
    removeFromQueue prevents user from deleting
    song in queue that's currently in ReactPlayer.
    Prevents songQueue from going out of order.
    */

    removeFromQueue(song){
      if (song.id !== this.state.idOfSongInPlayer) {
        var filterID = song.id;
        var toRemove = this.state.songQueue;
        
        var newQueue = toRemove.filter((song) => {
          return song.id !== filterID;
        });

        this.setState({
          songQueue: newQueue
        });

      }
      
    }

    /*
    clicking this song in the queue also
    sets the idOfSongInPlayer 
    */
    clickToPlaySong(song){
      
      this.setState({
        playSong: song,
        idOfSongInPlayer: song.id
      });
    }


    

    /*NOTE
    callback for ReactPlayer onEnded event ONLY 
    
    playSongFromQueue DOES NOT DELETE ITEMS from SongQueue

    If the song in the player ends and there's nothing in the 
    queue, user gets no error.
    */
    playSongFromQueue(){
      //if the songQueue is not empty
      if(this.state.songQueue.length > 0) {
        
        //if ReactPlayer has previously played songs from the Queue
        if (this.state.idOfSongInPlayer !== null) {
          var oldID = this.state.idOfSongInPlayer;
          var queue = this.state.songQueue;

          var foundIdx;
          var newID;

          queue.forEach((song, idx) => {
            /*
              when you find the last song's ID in the queue
              make sure there's an actual next song to play
              in the quque
            */
            if (song.id === oldID && (idx + 1 !== queue.length))
              foundIdx = idx + 1;
          });

          //set state of idOfSongInPlayer & playSong 
          newID = queue[foundIdx].id;

          this.setState({
            idOfSongInPlayer: newID,
            playSong: queue[foundIdx]
          });

        //else if there are songs in the queue and 
        //we're playing from the queue for the first time
        } else if (this.state.idOfQueueSongInPlayer === null)  {

          var queue = this.state.songQueue;

          this.setState({
            idOfQueueSongInPlayer: queue[0].id,
            playSong: queue[0]
          });

        }

      }
    }    

    componentDidMount(){
      this.handleSearch('awooga');
    }

    render() {

      return (
        
        <div>
          <div className="playerStyling">
            <div>
              <ReactPlayer 
                soundcloudConfig={scConfig} 
                url={!this.state.playSong ? this.state.backupSong : this.state.playSong.permalink_url} 
                controls={true}
                onEnded={this.playSongFromQueue}
                playing />

                <h1>Now Playing: {!this.state.playSong ? "Untitled" : this.state.playSong.title }</h1>
            </div>

           <SongQueueView queueList={this.state.songQueue} cbObj={this.cbObj} />

           <h1>PlayList</h1>
           <button>Load Your Playlist?</button>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ex, minima ipsum similique eaque, ipsa, reprehenderit nam blanditiis omnis facilis necessitatibus corporis aperiam deleniti. Quas, quod, assumenda. Dignissimos, nisi, possimus.</p>

            
          </div>







          <div className="searchStyling">
            <h1>Search Results</h1>
            <Search callback={this.handleSearch} />

            <SearchView addToQueueCB={this.addToSongQueue} listOfSongs={this.state.searchResults} />
          </div>


          <div className="clearFix">
          </div>

        </div>

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.app'));