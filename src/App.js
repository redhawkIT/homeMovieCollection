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
      filterdMovies: []
    };
  }

  componentWillMount() {
    this.setState({movies: randomMovies(10)})
  }

  _toggleView() {
    this.setState({view: !this.state.view});
  }

  _filter(filter, term) {
    const movies = this.state.movies;
    if(filter == 'Title' && term.length) {
      this._filterByTitle(term.toLowerCase(), movies);
    } else if (filter == 'Year' && term.length) {
      this._filterByYear(term.toString(), movies);
    } else if (filter == 'Rating' && term.length) {
      this._filterByRating(term.toString(), movies);
    } else if (filter == 'Genre' && term.length) {
      this._filterByGenre(term.toLowerCase(), movies);
    } else if (filter == 'Actors' && term.length) {
      this._filterByActors(term.toLowerCase(), movies);
    } else {
      this.setState({search: false})
    }
  }

  _filterByActors(name, movies) {
    this.setState({search: true})
    const filterdMovies = movies.filter(movie => {
      return movie.actors.filter(actor => {
        return actor.toLowerCase().includes(name);
      }).length;
    });
    this.setState({filterdMovies});
  }

  _filterByGenre(genre, movies) {
    this.setState({search: true})
    const filterdMovies = movies.filter(movie => {
      return movie.genre.toLowerCase().includes(genre);
    });
    this.setState({filterdMovies});
  }

  _filterByRating(rating, movies) {
    this.setState({search: true})
    const filterdMovies = movies.filter(movie => {
      return movie.rating == rating;
    });
    this.setState({filterdMovies});
  }

  _filterByYear(year, movies) {
    this.setState({search: true})
    const filterdMovies = movies.filter(movie => {
      return movie.year.toString().includes(year);
    });
    this.setState({filterdMovies});
  }

  _filterByTitle(title, movies) {
    this.setState({search: true})
    const filterdMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(title);
    });
    this.setState({filterdMovies});
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
          <MovieList movies={movies} remove={this._removeMovie.bind(this)}/>
        </div>
      );
    }
  }

  _removeMovie(title) {
    const movies = this.state.movies;
    let index = null;
    movies.forEach((movie, i) => {
      if(movie.title == title) {
        index = i;
      }
    })
    movies.splice(index, 1);
    this.setState({movies});
  }

  _addMovie(movie) {
    if(movie.actors.length) {
      movie.actors = movie.actors.split(', ');
    }

    this.setState({movies: this.state.movies.concat([movie])});
  }

  render() {
    return (
      <div>
        <NavBar toggleView={this._toggleView.bind(this)}/>
        <div className='container App'>
          <div className='row'>
            <div className='col-md-offset-2 col-md-8'>
            {this._displayView(this.state.view)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
