import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      view: false,
      filter: {
        rating: null,
        genere: null,
        actors: [],
        year: null
      }
    };
  }

  componentWillMount() {
    let movies = [{
      year: 1999,
      title: "Matrix",
      genre: "science fiction",
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
      rating: 8.7}]

    this.setState({movies})
  }

  _toggleView() {
    this.setState({view: !this.state.view})
  }

  _filterMovies(movies) {
    const filter = this.state.filter;
    const mapped = [];
    for(const title in movies) {
      mapped.push(movies[title]);
    }
    return movies
  }

  _displayView(view){
    const movies = this.state.movies;
    if(view) {
      return <AddMovie movies={movies} addMovie={this._addMovie.bind(this)} toggleView={this._toggleView.bind(this)}/>;
    } else {
      return (
        <div>
          <SearchBar/>
          <MovieList movies={movies}/>;
        </div>
      );
    }
  }

  _addMovie(movie) {
    this.setState({movies: this.state.movies.concat([movie])});
  }

  render() {
    const movies = this._filterMovies(this.state.movies);
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
