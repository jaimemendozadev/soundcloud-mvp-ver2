import React, {Component} from 'react';

const SongQueueViewItem = (props) => {
 
    const styling = {
      marginTop: 10,  
      marginBottom: 10
    }

    const removeFromQueue = () => {
      console.log("inside songqueue removeFromQueue")
      console.log(props.cbObj)
      props.cbObj.remove(props.data);

    }

    const clickToPlaySong = () => {
      //console.log("inside songqueue clickToPlaySong")
      console.log("props song is", props.data)
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
