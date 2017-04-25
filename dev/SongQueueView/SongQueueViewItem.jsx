import React, {Component} from 'react';

const SongQueueViewItem = (props) => {
 
    const styling = {
      marginTop: 15,  
      marginBottom: 15
    }

    const removeFromQueue = () => {
      props.cbObj.remove(props.data);
    }

    const clickToPlaySong = () => {
      props.cbObj.clickToPlay(props.data);
    }

    return ( 
      <div style={styling}>
        <span>Title: {props.data.title ? props.data.title : "Unavailable"}</span><br />
        <span>Genre: {props.data.genre ? props.data.genre : "Unavailable"}</span><br />
        <span>{props.data.permalink_url ? <a href={props.data.permalink_url} target="_blank">SoundCloud Link</a> : "Unavailable"}</span><br />

        <span onClick={removeFromQueue}>Click to Remove From Queue</span><br />
        <span onClick={clickToPlaySong}>Click to Play This Song</span>


      </div>   
    )
  
  
}

export default SongQueueViewItem;
