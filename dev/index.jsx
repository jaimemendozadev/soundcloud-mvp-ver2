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

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        playSong: 'https://soundcloud.com/fly-eye/awooga-1',
        searchResults: [],
        songQueue: [],
        backupSong: 'https://soundcloud.com/fly-eye/awooga-1'
      }
      this.handleSearch = this.handleSearch.bind(this);
      this.getListOfSearchResults = this.getListOfSearchResults.bind(this);
      this.playNextSong = this.playNextSong.bind(this);
      this.addToSongQueue = this.addToSongQueue.bind(this);
    }

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

    playNextSong(song){
      this.setState({
        playSong: song.permalink_url
      });

    }

    addToSongQueue(song){
      var newQueue = this.state.songQueue;
      newQueue.push(song);

      this.setState({
        songQueue: newQueue
      })

    }





    

    componentDidMount(){
      this.handleSearch('awooga');
    }

    render() {
      return (
        
        <div>
          <div className="playerStyling">
            <ReactPlayer 
              soundcloudConfig={scConfig} 
              url={this.state.playSong} 
              controls={true}
              playing />
            
            <h1>SongQueue</h1>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ex, minima ipsum similique eaque, ipsa, reprehenderit nam blanditiis omnis facilis necessitatibus corporis aperiam deleniti. Quas, quod, assumenda. Dignissimos, nisi, possimus.

           <SongQueueView queueList={this.state.songQueue} playSongCB={this.playNextSong} />

            
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