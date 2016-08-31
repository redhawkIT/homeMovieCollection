import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {}
    };
  }

  render() {
    return (
      <div>
        <NavBar/>
        <SearchBar/>
      </div>
    );
  }
}
