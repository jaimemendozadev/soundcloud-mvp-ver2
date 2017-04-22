import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const SoundCloudAPI = require('../config.js');

const scConfig = {
  clientId: SoundCloudAPI.ID,
  showArtwork: true
};

//playerSong: "https://api.soundcloud.com/tracks/18952266/stream",  

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        firstSong: {},
        songs: []
      }
    }
    componentDidMount(){

      axios.get("http://api.soundcloud.com/tracks?client_id=" + SoundCloudAPI.ID + "&q=awooga")
        .then( (response) => {
                  
          var data = response.data;
          var playSong = data.shift();

          console.log("data is ", data);
          console.log("playSong is ", playSong)  

          this.setState({
            firstSong: playSong,
            songs: data
          });
        })
        .catch( (error) => {
          console.log(error);
      });      
    }
    render() {
      return (
        //https://soundcloud.com/fly-eye/awooga-1

        //this.state.firstSong.permalink_url

        <ReactPlayer 
        soundcloudConfig={scConfig} 
        url={'https://soundcloud.com/fly-eye/awooga-1'} 
        controls={true}
        
        playing />
        
        

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.container'));