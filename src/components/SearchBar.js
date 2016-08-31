import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Movies"/>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options <span className="caret"></span></button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="#">Year</a></li>
                <li><a href="#">Rating</a></li>
                <li><a href="#">Actors</a></li>
                <li><a href="#">Genre</a></li>
              </ul>
            </div>{/* <!-- /btn-group --> */}
          </div>{/* <!-- /input-group --> */}
        </div>{/* <!-- /.col-lg-6 --> */}
      </div>
    );
  }
}
