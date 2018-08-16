import React, { Component } from 'react'
import { Redirect } from 'react-router'

import './Login.css'
/* PROVIDERS */
import Api from '../../providers/Api'
/* COMPONENTS */
import {  } from 'react-bootstrap'


class Login extends Component {

  state = {
    redirect: false,
    loginInput: "",
    passwordInput: ""
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
    console.log(this.state)
    Api.authenticate(this.state.loginInput,this.state.passwordInput).then( res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      localStorage.setItem('email',res.email)
      localStorage.setItem('name',res.name)
      this.setState({redirect: true})
    })
  }

  /* INTERNAL FUNCTIONS */


  /* RENDER */
  render() {
    if (localStorage.getItem('email')!= null) {return <Redirect to="/my-account" push={true} />}
    if (this.state.redirect) {return <Redirect to="/" push={true} />}

    return (

      <div className="LoginPage">
        <div className="container">

            <div className="col-md-6 col-md-offset-3 col-xs-12">

              <div className="panel panel-default login-container">

                <div className="panel-body">
                  <h3 className="text-center">Connexion</h3>
                  <form>
                    <label>Login</label>
                    <input required onChange={this.handleChangeLogin} className="form-control" type="email" placeholder="your email here..." />
                    <br />
                    <label>Password</label>
                    <input required onChange={this.handleChangePassword} className="form-control" type="password" placeholder="your password here..." />
                    <br />
                    <button onClick={this.submitLoginForm} className="btn btn-primary form-control">LOGIN</button>
                  </form>
                </div>
              </div>


            </div>

        </div>
      </div>
    );
  }
}

export default Login;
