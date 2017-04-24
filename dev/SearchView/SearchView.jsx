import React, {Component} from 'react';
import SearchViewItem from './SearchViewItem.jsx';

const SearchView = (props) => {
  if (!props.listOfSongs) {
    return <h3>Waiting for data...</h3>
  }
  return ( 
      <div>
      {props.listOfSongs.map((song, idx) => {
        return <SearchViewItem playSongCB={props.playSongCB} key={song.id} data={song} />
      })}
      </div>      
  )
}

export default SearchView;