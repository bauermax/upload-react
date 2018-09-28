import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'



/* COMPONENTS */
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Account from './pages/Account/Account'


import './App.css'

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/my-account' component={Account}/>
          </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {...ownProps}
}
export default App;
