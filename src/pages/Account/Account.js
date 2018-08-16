import React, { Component } from 'react'


import './Account.css'
/* PROVIDERS */
import Api from '../../providers/Api'

/* COMPONENTS */
import {  } from 'react-bootstrap'


class Login extends Component {

  state = {
    email: null,
    files: []
  }

  componentDidMount() {
    let email = localStorage.getItem('email')
    this.setState({
        email: email,
        files: Api.getFilesForUser(email)
    })
  }
  /*  JOB FUNCTIONS */

  /* INTERNAL FUNCTIONS */


  /* RENDER */
  render() {



    return (

      <div className="AccountPage">
        <br />
        <div className="container container-account">
            <div className="col-md-12">
              <h4>Upload new files</h4>
            </div>
        </div>

        <div className="container container-account">
            <div className="col-md-12">
              <h4>My files</h4>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
