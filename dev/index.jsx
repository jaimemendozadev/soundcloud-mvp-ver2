import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Search from './search.jsx';
import SearchView from './SearchView/SearchView.jsx';
const helper = require('./helpers/index.jsx');
const scConfig = require('../config.js');


//playerSong: "https://api.soundcloud.com/tracks/18952266/stream",  

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        firstSong: {},
        songs: [],
        backupSong: 'https://soundcloud.com/fly-eye/awooga-1'
      }
      this.handleSearch = this.handleSearch.bind(this);
      this.getListOfSearchResults = this.getListOfSearchResults.bind(this);
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
        songs: listOfSearchResults
      });
    }
    

    componentDidMount(){
      this.handleSearch('awooga');
    }

    render() {
      
      return (

        <div>

          <ReactPlayer 
          soundcloudConfig={scConfig} 
          url={'https://soundcloud.com/fly-eye/awooga-1'} 
          controls={true}
          playing />

          <Search callback={this.handleSearch} />

          <SearchView listOfSongs={this.state.songs} />
          

        </div>

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.container'));