import React, {Component} from 'react';
import SongQueueItem from './SongQueueItem.jsx';

const SongQueue = (props) => {
  if (!props.listOfSongs) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.listOfSongs.map((song, idx) => {
        return <SongQueueItem key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SongQueue;