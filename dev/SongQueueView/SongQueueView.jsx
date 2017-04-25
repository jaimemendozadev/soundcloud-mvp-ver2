import React, {Component} from 'react';
import SongQueueViewItem from './SongQueueViewItem.jsx';

class SongQueue extends Component {
  constructor(props){
    super(props);
    this.state = {
      SongQueueFormInput: 'Enter the SongQueue Name...'
    }
    this.handleFormChange = this.handleFormChange.bind(this);

  }

  handleFormChange(event){
    
    this.setState({
      SongQueueFormInput: event.target.value
    });

  }
  
  

  //onClick={this.createPlaylistFromSongQueue}

  render(){
    if (!this.props.queueList) {
      return <h3>Waiting for data...</h3>
    }

    return ( 
      
      <div>
        <h1>SongQueue</h1>
        <form>
          <input onChange={this.handleFormChange} type="text" value={this.state.SongQueueFormInput} />
          <button type="submit">Save SongQueue As Playlist?</button>
        </form>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ex, minima ipsum similique eaque, ipsa, reprehenderit nam blanditiis omnis facilis necessitatibus corporis aperiam deleniti. Quas, quod, assumenda. Dignissimos, nisi, possimus.</p>
      
        {this.props.queueList.map((song, idx) => {
          return <SongQueueViewItem cbObj={this.props.cbObj} key={song.id} data={song} />
        })}
      </div>      
    )  



  }
  
}

export default SongQueue;