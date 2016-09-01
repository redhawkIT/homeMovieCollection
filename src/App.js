import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import {randomMovies} from './models/helpers';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      view: false,
      search: false,
      filterdMovies: [],
      title: null,
      rating: null,
      genre: null,
      actors: [],
      year: null
    };
  }

  componentWillMount() {
    this.setState({movies: randomMovies(300)})
  }

  _toggleView() {
    this.setState({view: !this.state.view});
  }

  _filter(filter) {
    console.log("called")

    const movies = this.state.movies;
    const {title, rating, genre, actors, years} = filter;
    console.log("title", title)
    if(title && title.length) {

      this.setState({search: true})
    }
    const filterdMovies = this._filterByTitle(title, movies);
    this.setState({filterdMovies})
  }

  _filterByTitle(title, movies) {
    return movies.filter(movie => {
      return movie.title.toLowerCase().includes(title);
    });
  }

  _displayView(view){
    let movies = this.state.movies;
    if(this.state.search) {
      movies = this.state.filterdMovies;
    }

    if(view) {
      return <AddMovie movies={movies} addMovie={this._addMovie.bind(this)} toggleView={this._toggleView.bind(this)}/>;
    } else {
      return (
        <div>
          <SearchBar filter={this._filter.bind(this)}/>
          <MovieList movies={movies}/>;
        </div>
      );
    }
  }

  _addMovie(movie) {
    this.setState({movies: this.state.movies.concat([movie])});
  }

  render() {
    return (
      <div>
        <NavBar toggleView={this._toggleView.bind(this)}/>
        <div className="container App">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
            {this._displayView(this.state.view)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
