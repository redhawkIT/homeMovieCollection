import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rating: null,
      genre: '',
      actors: [],
      year: null,
      errorMsg: null
    };
  }

  _handleSubmit(event) {
    event.preventDefault();
    if(this._isValidData(this.state)) {
      this.props.addMovie(this.state);
      this.props.toggleView();
    }
    this.setState({
      title: '',
      rating: 'N/A',
      genre: 'N/A',
      actors: [],
      year: 'N/A',
      errorMsg: null
    });
  }

  _isValidData(state) {
    const {title, rating, genre, actors, year} = state;

    if(!this.props.movies.length) return true;
    const isTitle = this.props.movies.filter(movie => {
      return movie.title.toLowerCase() == title.toLowerCase();
    });

    if(title.length <= 0) {
      this.setState({errorMsg: 'Must enter a title'});
      return false;
    }
    if(isTitle.length) {
      this.setState({errorMsg: 'That movie already exists!'});
      return false;
    }
    return true;
  }

  _onTitleChange(title) {
    this.setState({title});
  }
  _onYearChange(year) {
    this.setState({year});
  }
  _onRatingChange(rating) {
    this.setState({rating});
  }
  _onGenreChange(genre) {
    this.setState({genre});
  }
  _onActorsChange(actors) {
    this.setState({actors});
  }

  render() {
    return (
      <form className='form-horizontal' onSubmit={this._handleSubmit.bind(this)}>
        <div className='form-group'>
          <label className='control-label col-sm-2'>Title:</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              placeholder='Enter Title'
              value={this.state.title}
              onChange={event => this._onTitleChange(event.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='control-label col-sm-2'>Year:</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              placeholder='Enter Year'
              value={this.state.year}
              onChange={event => this._onYearChange(event.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='control-label col-sm-2'>Rating:</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              placeholder='Enter Rating'
              value={this.state.rating}
              onChange={event => this._onRatingChange(event.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='control-label col-sm-2'>Genre:</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              placeholder='Enter Genre'
              value={this.state.genre}
              onChange={event => this._onGenreChange(event.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='control-label col-sm-2'>Actors:</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              placeholder='Enter Actors name, name...'
              value={this.state.actors}
              onChange={event => this._onActorsChange(event.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-sm-offset-2 col-sm-10'>
            <button type='submit' className='btn btn-default'>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
