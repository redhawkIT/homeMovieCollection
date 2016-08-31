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
    console.log(this.state.view)
  }

  _filterMovies(movies) {
    const filter = this.state.filter;
    const mapped = [];
    for(const title in movies) {
      mapped.push(movies[title]);
    }
    return movies
  }


  render() {
    const movies = this._filterMovies(this.state.movies);
    return (
      <div>
        <NavBar toggleView={this._toggleView.bind(this)}/>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
            <SearchBar/>
            {this.state.view ? <AddMovie movies={movies}/> : <MovieList movies={movies}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
