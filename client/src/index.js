import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'Access-Control-Allow-Origin: http://localhost:3001';
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
