import React, {Component} from 'react';
import ListItem from '../ListItem.jsx';

const SongQueue = (props) => {
  if (!props.queueList) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.queueList.map((song, idx) => {
        return <ListItem invokeCB={props.playSongCB} key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SongQueue;