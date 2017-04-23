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
      var self = this;
      
      

      var callback = function(data){
        console.log("successfully invoked callback on retrieved results")
        console.log("retrievedData.length is ", data.length)
        for (var i in data)
          console.log(data[i])
        // var actualData = data[0].data;
        // console.log("the retrieved data is ", JSON.stringify(data))
      }
      
      //test
      helper.axiosGET(callback, string);

      //helper.axiosGET(self, string);
      
    }
    
    componentDidMount(){
      var self = this;
      // helper.axiosGET(self);


      axios.get(`${scConfig.trackQuery}${scConfig.clientId}&q=` + "awooga")
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

          <Search callback={this.handleSearch} />

        </div>


        
        

      );
    }

}


ReactDOM.render(<App />, document.querySelector('.container'));