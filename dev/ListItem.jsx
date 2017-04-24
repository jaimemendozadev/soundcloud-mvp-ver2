import React, {Component} from 'react';

const ListItem = (props) => {

  const handleClick = () => {
    props.invokeCB(props.data);
  }
  
 
    const styling = {
      marginTop: 10,  
      marginBottom: 10
    }

    return ( 
      <div onClick={handleClick} style={styling}>
        <span>Title: {props.data.title ? props.data.title : "Unavailable"}</span><br />
        <span>Genre: {props.data.genre ? props.data.genre : "Unavailable"}</span><br />
        <span>{props.data.permalink_url ? <a href={props.data.permalink_url} target="_blank">SoundCloud Link</a> : "Unavailable"}</span>
      </div>   
    )
  
  
}

export default ListItem;