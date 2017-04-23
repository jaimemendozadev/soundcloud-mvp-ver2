import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state= {
      inputField: "Enter Artist or Song Name..."
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    console.log("the text is ", event.target.value);
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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} type="text" value={this.state.inputField} />
        
        {/*Why does it work with an onClick and not an onSubmit?*/}
        {/*<button onClick={this.handleSubmit}>Submit</button>*/}

        <button>Submit</button>
      </form>
    );
  }
}

export default Search;