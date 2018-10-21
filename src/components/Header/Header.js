import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


import './Header.css';

class Header extends Component {



  render() {
    //console.log(this.props)
    return (

      <div className="Header">

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>EasyUpload</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              { !this.props.user && <li><Link to='/login'>Login / Register</Link></li>}
              { this.props.user && <li><Link to='/my-account'>{this.props.user.name}</Link></li>}
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(Header);
