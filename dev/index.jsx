import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Search from './search.jsx';
import SearchView from './SearchView/SearchView.jsx';
import SongQueue from './SongQueue/SongQueue.jsx'
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
      console.log("Managed to get inside playNextSong");
      console.log("song passed to playNextSong is ", song)

      // this.setState({
      //   playSong: urlString
      // });

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

           <SongQueue />

            
          </div>



          <div className="searchStyling">
            <h1>Search Results</h1>
            <Search callback={this.handleSearch} />
            <SearchView playSongCB={this.playNextSong} listOfSongs={this.state.searchResults} />
          </div>


          <div className="clearFix">
          </div>

        </div>

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.app'));