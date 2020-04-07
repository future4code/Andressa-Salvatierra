import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA9KAMtXQ5jUdzjFaivGBQ4nSdI1s-sb3c",
  authDomain: "futuretube-246ef.firebaseapp.com",
  databaseURL: "https://futuretube-246ef.firebaseio.com",
  projectId: "futuretube-246ef",
  storageBucket: "futuretube-246ef.appspot.com",
  messagingSenderId: "483982462346",
  appId: "1:483982462346:web:7340ef7027e1680e968c73",
  measurementId: "G-YD98N20D26"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
