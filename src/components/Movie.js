import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    const {title, rating, genre, actors, year} = this.props.movie;
    return (
      <a href="#" className="list-group-item Movie">
        <div id="Movie-Title">{`${title} (${year || "N/A"})`}</div>
        <div id="Movie-Rating">
          {`Rating: ${rating || "N/A"}`}
          <button type="button" className="btn btn-default btn-xs Movie-Button" onClick={this.props.remove.bind(this, title)}>Delete</button>
        </div>
        <div id="Movie-Genre">{`Genre: ${genre || "N/A"}`}</div>
        <div id="Movie-Actors">{`Staring: ${actors.join(', ') || "N/A"}`}</div>
      </a>
    );
  }
}
