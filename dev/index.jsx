import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Search from './search.jsx';
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
    }

    handleSearch(string){
      console.log("Inside handleSearch")
      var self = this;
      
      // helper.axiosGET(self, string);

      axios.get(`${scConfig.query}&q=${string}`)
        .then( (response) => {
                  
          var data = response.data;
          var playSong = data.shift();

          console.log("data is ", data);
          console.log("playSong is ", playSong)  

          self.setState({
            firstSong: playSong,
            songs: data
          });
        })
        .catch( (error) => {
          console.log(error);
      }); 
      
    }
    
    componentDidMount(){
      var self = this;
      // helper.axiosGET(self);


      axios.get(`${scConfig.query}&q=awooga`)
        .then( (response) => {
                  
          var data = response.data;
          var playSong = data.shift();

          console.log("data is ", data);
          console.log("playSong is ", playSong)  

          self.setState({
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
        

        <div>

          <ReactPlayer 
          soundcloudConfig={scConfig} 
          url={'https://soundcloud.com/fly-eye/awooga-1'} 
          controls={true}
          playing />

          <Search cb={this.handleSearch} />

        </div>


        
        

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.container'));