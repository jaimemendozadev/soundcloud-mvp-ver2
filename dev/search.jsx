import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state= {
      inputField: "Enter Song or Artist..."
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    this.setState({
      inputField: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.callback(this.state.inputField);

    
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text" value={this.state.inputField} />

          <button>Submit</button>
        </form>
      <h3>Click on a search result to add it to the SongQueue<br />
      Scroll to view your search results!</h3>
      </div>
    );
  }
}

export default Search;