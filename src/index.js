import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7gw_FokBcTnqox1-YEWg1YIN2pDonHAc",
    authDomain: "evernote-clone-dd253.firebaseapp.com",
    databaseURL: "https://evernote-clone-dd253.firebaseio.com",
    projectId: "evernote-clone-dd253",
    storageBucket: "evernote-clone-dd253.appspot.com",
    messagingSenderId: "795740397897",
    appId: "1:795740397897:web:cbebfc2f6bd8ff2993ba98",
    measurementId: "G-ZB8B7ZC0CE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
