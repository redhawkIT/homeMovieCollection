import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    const {title, rating, genre, actors, year} = this.props.movie;
    return (
      <a href="#" className="list-group-item Movie">
        <div id="Movie-Title">{`${title} (${year})`}</div>
        <div id="Movie-Rating">{rating}</div>
      </a>
    );
  }
}
