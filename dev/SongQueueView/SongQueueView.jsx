import React, {Component} from 'react';
import SongQueueViewItem from './SongQueueViewItem.jsx';

class SongQueue extends Component {
  constructor(props){
    super(props);
    this.state = {
      SongQueueFormInput: 'Enter New Playlist Name...'
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleFormChange(event){
    
    this.setState({
      SongQueueFormInput: event.target.value
    });

  }

  handleSubmit(event){
    event.preventDefault();

    var playlistName = this.state.SongQueueFormInput;
    this.props.cbObj.createPlaylist(playlistName);
    


  }
  
  render(){
    if (this.props.queueList.length === 0) {
      return(
        <div>
          <h1>SongQueue</h1>
          <h4>Click on a search result to start filling the queue!</h4>
        </div>
      )   
    }

    return ( 
      
      <div>
        <h1>SongQueue</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleFormChange} type="text" value={this.state.SongQueueFormInput} />
          <h4>Save your current SongQueue as a playlist by filling out the form and clicking the Save button!</h4>
          <button type="submit">Save SongQueue As Playlist</button>
        </form>

        <br />

        

       
      
        {this.props.queueList.map((song, idx) => {
          return <SongQueueViewItem cbObj={this.props.cbObj} key={song.id} data={song} />
        })}
      </div>      
    )  



  }
  
}

export default SongQueue;