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

  handleSubmit(){
    console.log("inside handleSubmit")

    this.props.cb(this.state.inputField);

    
  }

  render(){
    {console.log("props is ", this.props)}
    return (
      <div>
        <input onChange={this.handleInput} type="text" value={this.state.inputField} />

        {//Why does it work with an onClick and not an onSubmit?}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Search;