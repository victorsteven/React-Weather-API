import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

export default class  App extends Component {
  render () {
    return (
      <div className="App">
        {/* <h1>THis is me</h1> */}
        <SearchBar />
      </div>
    );
  }
}
