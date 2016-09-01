import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>

          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>Home Movies</a>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <form className='navbar-form navbar-left'>
              <button className='btn btn-default' onClick={this.props.toggleView.bind(this)}>Add Movie</button>
            </form>
          </div> {/* <!-- /.navbar-collapse -->*/}
        </div> {/* <!-- /.container-fluid --> */}
      </nav>
    );
  }
}
