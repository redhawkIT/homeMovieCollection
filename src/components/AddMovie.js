import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <h1>Add Movie</h1>
    );
  }
}
