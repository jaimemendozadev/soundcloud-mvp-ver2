import React, {Component} from 'react';

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

export default SearchViewItem;