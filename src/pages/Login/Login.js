import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import './Login.css'
/* PROVIDERS */
import Api from '../../providers/Api'
/* COMPONENTS */
import {  } from 'react-bootstrap'


class Login extends Component {

  state = {
    redirect: false,
    loginInput: "",
    passwordInput: "",
    errorMessage: false
  }
  /*  JOB FUNCTIONS */
  handleChangeLogin = event => {
    this.setState({loginInput: event.target.value})
  }
  handleChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  submitLoginForm = (event) => {
    event.preventDefault()

    Api.authenticate(this.state.loginInput,this.state.passwordInput).then( res => {
      console.log(res)
      if(!res.token || !res.email){this.setState({errorMessage:true});return;}
      let user = {
        token: res.token,
        email: res.email,
        name: res.name
      }

      localStorage.setItem('user',JSON.stringify(user))


      this.props.dispatch({
        type: 'LOGIN_USER',
        data: user,
      })


    })
  }

  /* INTERNAL FUNCTIONS */


  /* RENDER */
  render() {
    // if (localStorage.getItem('email')!= null) {return <Redirect to="/my-account" push={true} />}
    if (this.props.loginSuccess) {return <Redirect to="/my-account" push={true} />}
    if (this.props.user) {return <Redirect to="/" push={true} />}

    return (

      <div className="LoginPage">
        <div className="container">
            <div className="col-md-6 col-md-offset-3 col-xs-12">
              <div className="panel panel-default login-container">
                <div className="panel-body">
                  <h3 className="text-center">Login</h3>
                  <form>
                    <label>Login</label>
                    <input required onChange={this.handleChangeLogin} className="form-control" type="email" placeholder="your email here..." />
                    <br />
                    <label>Password</label>
                    <input required onChange={this.handleChangePassword} className="form-control" type="password" placeholder="your password here..." />
                    <br />
                    <button onClick={this.submitLoginForm} className="btn btn-primary form-control">LOGIN</button>
                    {this.state.errorMessage && <h6 className="text-danger text-center">Error - wrong mail or password</h6>}

                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }


}

const mapStateToProps = (state,ownProperties) => (
  {...ownProperties,user: state.user}
)
export default connect(mapStateToProps)(Login);
