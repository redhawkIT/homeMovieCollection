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
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2">Title:</label>
          <div className="col-sm-10">
            <input className="form-control" id="email" placeholder="Enter Title"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Year:</label>
          <div className="col-sm-10">
            <input className="form-control" id="email" placeholder="Enter Year"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Rating:</label>
          <div className="col-sm-10">
            <input className="form-control" id="pwd" placeholder="Enter Rating"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Genre:</label>
          <div className="col-sm-10">
            <input className="form-control" id="pwd" placeholder="Enter genre"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Actors:</label>
          <div className="col-sm-10">
            <input className="form-control" id="pwd" placeholder="Enter actors"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
