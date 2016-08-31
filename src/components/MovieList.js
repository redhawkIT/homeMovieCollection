import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <h1>MOVIE LIST</h1>
    );
  }
}
