import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import './Header.css';

class Header extends Component {

  state = {
    authenticated: localStorage.getItem('email')
  }

  render() {

    return (
      <div className="Header">

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>EasyUpload</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              { ! this.state.authenticated && <li><Link to='/login'>Login</Link></li>}
              { this.state.authenticated && <li><Link to='/my-account'>{localStorage.getItem('name')}</Link></li>}
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default Header;
