import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Search from './search.jsx';
import SearchView from './SearchView/SearchView.jsx';
import SongQueueView from './SongQueueView/SongQueueView.jsx'
const helper = require('./helpers/index.jsx');
const scConfig = require('../config.js');


//playerSong: "https://api.soundcloud.com/tracks/18952266/stream",  
//hardCoded starter song: https://soundcloud.com/fly-eye/awooga-1


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        playSong: null,
        searchResults: [],
        songQueue: [],
        backupSong: 'https://soundcloud.com/fly-eye/awooga-1'
      }
      
      //App Methods
      this.handleSearch = this.handleSearch.bind(this);
      this.getListOfSearchResults = this.getListOfSearchResults.bind(this);

      //ListItem callbakcs
      this.addToSongQueue = this.addToSongQueue.bind(this);
      this.removeFromQueue = this.removeFromQueue.bind(this);
      this.clickToPlaySong = this.clickToPlaySong.bind(this);
      this.putSongInPlayer = this.putSongInPlayer.bind(this);

      this.cbObj = {
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
      console.log("listOfSearchResults is ", listOfSearchResults);

      this.setState({
        searchResults: listOfSearchResults
      });
    }



    /*********************
     * ListItem callbacks
     *********************/
    addToSongQueue(song){
      var newQueue = this.state.songQueue;
      newQueue.push(song);

      this.setState({
        songQueue: newQueue
      })

    }

    removeFromQueue(song){
      //FIX THIS RIGHT NOW
      console.log("inside removeFromQueue func")
      console.log(song);

    }

    clickToPlaySong(song){
      console.log("inside clickToPlaySong")
      console.log("song is ", song)
      this.setState({
        playSong: song
      });
    }


    //callback for ReactPlayer onEnded event ONLY 
    putSongInPlayer(song){
      this.setState({
        playSong: song
      })
    }    


    componentDidMount(){
      this.handleSearch('awooga');
    }

    render() {

      // const cbObj = {
      //   removeFromQueue: this.removeFromQueue,
      //   clickToPlaySong: this.clickToPlaySong,
      // }

      
      return (
        
        <div>
          <div className="playerStyling">
            <div>
              <ReactPlayer 
                soundcloudConfig={scConfig} 
                url={!this.state.playSong ? this.state.backupSong : this.state.playSong.permalink_url} 
                controls={true}
                playing />

                <h1>Now Playing: {!this.state.playSong ? "Untitled" : this.state.playSong.title }</h1>
            </div>
            
            <h1>SongQueue</h1>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ex, minima ipsum similique eaque, ipsa, reprehenderit nam blanditiis omnis facilis necessitatibus corporis aperiam deleniti. Quas, quod, assumenda. Dignissimos, nisi, possimus.

           <SongQueueView queueList={this.state.songQueue} cbObj={this.cbObj} />

            
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