import React, {Component} from 'react';
import SongQueueViewItem from './SongQueueViewItem.jsx';

const SongQueue = (props) => {
  if (!props.queueList) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.queueList.map((song, idx) => {
        return <SongQueueViewItem cbObj={props.cbObj} key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SongQueue;