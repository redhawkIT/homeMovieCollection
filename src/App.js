import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      view: false
    };
  }

  _toggleView() {
    this.setState({view: !this.state.view})
    console.log(this.state.view)
  }

  render() {
    return (
      <div>
        <NavBar toggleView={this._toggleView.bind(this)}/>
        <SearchBar/>
        {this.state.view ? <AddMovie/> : <MovieList/>}
      </div>
    );
  }
}
