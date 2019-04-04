import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';



const createdStore = createStore(store);
ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><Provider store={createdStore}><App /></Provider></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
