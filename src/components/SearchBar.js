import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'Title',
      term: null
    };
  }

  _onInputChange(term) {
    this.props.filter(this.state.searchBy, term);
  }

  _searchBy(item) {
    this.setState({searchBy: item})
  }

  render() {
    return (
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder={`Search by ${this.state.searchBy}`}
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
        />
        <div className='input-group-btn'>
          <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Options <span className='caret'></span></button>
          <ul className='dropdown-menu dropdown-menu-right'>
            <li><a href='#' onClick={this._searchBy.bind(this, 'Year')}>Year</a></li>
            <li><a href='#' onClick={this._searchBy.bind(this, 'Rating')}>Rating</a></li>
            <li><a href='#' onClick={this._searchBy.bind(this, 'Actors')}>Actors</a></li>
            <li><a href='#' onClick={this._searchBy.bind(this, 'Genre')}>Genre</a></li>
            <li><a href='#' onClick={this._searchBy.bind(this, 'Title')}>Title</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
