import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
/* REDUX */
import { createStore } from 'redux';
/* REDUCERS */
import userReducer from './redux/reducers/userReducer';
/* REACT REDUX */
import { Provider } from 'react-redux';

/* GLOBAL STYLE */
import './index.css';
/* COMPONENTS */
import App from './App';
/* SW */
import registerServiceWorker from './registerServiceWorker';

const store = createStore(userReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* INIT USER */
let user =  JSON.parse(localStorage.getItem('user'));
store.dispatch({type:"LOGIN_USER",data:user})
/*    */

ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root')
  );
registerServiceWorker();
