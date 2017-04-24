import React, {Component} from 'react';
import ListItem from '../ListItem.jsx';


const SearchView = (props) => {
  if (!props.listOfSongs) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.listOfSongs.map((song, idx) => {
        return <ListItem invokeCB={props.addToQueueCB} key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SearchView;