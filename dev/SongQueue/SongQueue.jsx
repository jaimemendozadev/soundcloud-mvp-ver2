import React, {Component} from 'react';
import SongQueueItem from './SongQueueItem.jsx';

const SongQueue = (props) => {
  if (!props.queueList) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.queueList.map((song, idx) => {
        return <SongQueueItem playSongCB={props.playSongCB} key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SongQueue;