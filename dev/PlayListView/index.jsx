import React, {Component} from 'react';
import PlayListViewItem from './PlayListViewItem.jsx';
import ListItem from '../ListItem.jsx';
var axios = require('axios');


class PlayListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlists: []

    }
    this.getThePlaylists = this.getThePlaylists.bind(this);
    this.deletePlayListInDB = this.deletePlayListInDB.bind(this);

  }


  getThePlaylists(){
    axios.get('/api/allplaylists')
      .then( (allPlaylists) => {
        this.setState({
          playlists: allPlaylists    
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  deletePlayListInDB(playlistID){

    var url = `/api/aplaylist/${playlistID}`;

    axios.delete(url)
      .then( (response) => {
        console.log("response inside axios delete playlist", response)
        
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  componentDidMount(){

    axios.get('/api/allplaylists')
      .then( (allPlaylists) => {

        this.setState({
          playlists: allPlaylists    
        });
        
      })
      .catch( (error) => {
        console.log(error);
      });

  }
  
  render(){
    if (this.state.playlists.length === 0) {
      return(
        <div>
          <h1>PlayList</h1>
          <button onClick={this.getThePlaylists}>Load Your Playlist?</button>

          <br />
          <h3>Click on the button to retrieve your PlayLists from the database! :) </h3>
       </div>

      )   
    }

    return ( 
      
      <div>
        <h1>PlayList</h1>
        <button onClick={this.getThePlaylists}>Get Your Playlists!</button>

        <br />
        <h3>Click on the button to retrieve more PlayLists from the database! :) </h3>

       
      
        {this.state.playlists.data.map((playlist) => {
          return <PlayListViewItem 
                   transferToQueueCB={this.props.transferToQueueCB}
                   deletePlayListInDB={this.deletePlayListInDB} 
                   key={playlist._id} 
                   playlist={playlist} />
        }) }

      </div>      
    )  

  }
  
}

export default PlayListView;