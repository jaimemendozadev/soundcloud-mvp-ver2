import React, {Component} from 'react';

const PlayListViewItem = (props) => {

  const handleClick = () => {
    props.transferToQueueCB(props.playlist.songs);
  }
  
 
    const styling = {
      marginTop: 10,  
      marginBottom: 10
    }

    return ( 
      <div onClick={handleClick} style={styling}>
        <h3>{props.playlist.title}</h3>  
        <span>Current PlayList Count: {props.playlist.songs.length}</span>
      </div>   
    )
  
  
}

export default PlayListViewItem;