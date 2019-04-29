import React, { Component} from 'react';

export default class SearchBar extends Component {

  state = {
    term: ''
  }
  // this.onInputChange = this.onInputChange.bind(this);

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    })
    console.log(e.target.value)

  }
  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="get forecast" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}