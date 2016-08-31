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
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
            <SearchBar/>
            {this.state.view ? <AddMovie movies={this.state.movies}/> : <MovieList movies={this.state.movies}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
