import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


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


  logout = (event) => {
    event.preventDefault()
    localStorage.removeItem("user");
    this.props.dispatch({type: "LOGOUT_USER"})
  }
  componentDidMount() {
    // let email = localStorage.getItem('email')
    // this.setState({
    //     email: email,
    //     files: Api.getFilesForUser(email)
    // })
  }
  /*  JOB FUNCTIONS */

  /* INTERNAL FUNCTIONS */


  /* RENDER */
  render() {

    console.log("props",this.props)
    if (!this.props.user) {return <Redirect to="/" push={true} />}
    return (

      <div className="AccountPage">
        <br />

          <div className="container container-account">
              <div className="col-md-12">
                <h4>My Account</h4>
                <ul>
                  <li><a href="" onClick={this.logout}>Logout</a></li>
                </ul>
              </div>
          </div>

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
const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(Login);
