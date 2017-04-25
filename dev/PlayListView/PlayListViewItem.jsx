import React, {Component} from 'react';

const PlayListViewItem = (props) => {

  const handleClick = () => {
    props.transferToQueueCB(props.playlist.songs);
  }

  const handleDBDelete = () => {
    props.deletePlayListInDB(props.playlist._id);

  }
 
    const styling = {
      marginTop: 10,  
      marginBottom: 10
    }

    return ( 
      <div style={styling}>
        <h3>{props.playlist.title}</h3>  
        <span>Current PlayList Count: {props.playlist.songs.length}</span><br />
        <span  onClick={handleClick}>Click to Add PlayList to Your SongQueue</span><br />
        <span onClick={handleDBDelete}>Click to Delete PlayList From Your Account</span><br />

      </div>   
    )
  
  
}

export default PlayListViewItem;