import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

Sentry.init({dsn: "https://259721014e6749648bc847e9df1225f9@sentry.io/1483033"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
