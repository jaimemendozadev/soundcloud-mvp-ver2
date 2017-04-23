import React, {Component} from 'react';

const SearchViewItem = (props) => {
  return ( 
    <div>
      <span>Title: {props.data.title ? props.data.title : "Unavailable"}</span><br />
      <span>Genre: {props.data.genre ? props.data.genre : "Unavailable"}</span><br />
      <span>Url: {props.data.permalink_url ? props.data.permalink_url : "Unavailable"}</span>
      <br />

    </div>   
  )
}

export default SearchViewItem;