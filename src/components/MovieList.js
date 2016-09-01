import React, { Component } from 'react';
import Movie from './Movie';

export default class MovieList extends Component {

  _renderMovies(movies) {
    return movies.map((movie,i) => {
      return <Movie key={i} movie={movie} remove={this.props.remove}/>
    })
  }

  render() {
    const Movies = this._renderMovies(this.props.movies);
    return (
      <div className="list-group MovieList">
        {Movies}
      </div>
    );
  }
}
