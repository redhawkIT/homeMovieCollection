import React, { Component } from 'react';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._addMovie(this.state.term);
  }

  _onInputChange(term) {
    this.setState({term});
  }

  _addMovie(title) {

  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#">Home Movies</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" onSubmit={this._handleSubmit.bind(this)}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Add Movie"
                  onChange={event => this._onInputChange(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div> {/* <!-- /.navbar-collapse -->*/}
        </div> {/* <!-- /.container-fluid --> */}
      </nav>
    );
  }
}
