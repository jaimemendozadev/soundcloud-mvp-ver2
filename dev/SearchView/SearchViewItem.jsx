import React, {Component} from 'react';

const SearchViewItem = (props) => {

  const handleClick = () => {
    props.addToQueueCB(props.data);
  }
  
 
    const styling = {
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

export default SearchViewItem;









/*
//Save class version of SearchViewItem just in case


class SearchViewItem extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    this.props.playSongCB(this.props.data);
  }
  
  render() {
    const styling = {
      marginBottom: 10
    }

    return ( 
      <div onClick={this.handleClick} style={styling}>
        <span>Title: {this.props.data.title ? this.props.data.title : "Unavailable"}</span><br />
        <span>Genre: {this.props.data.genre ? this.props.data.genre : "Unavailable"}</span><br />
        <span>{this.props.data.permalink_url ? <a href={this.props.data.permalink_url} target="_blank">SoundCloud Link</a> : "Unavailable"}</span>
      </div>   
    )
  }
  
}
*/