import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUlJjs_O4qtum_1iHYYEBHzntBjimi6uY",
  authDomain: "fir-new1-27275.firebaseapp.com",
  projectId: "fir-new1-27275",
  storageBucket: "fir-new1-27275.appspot.com",
  messagingSenderId: "944499555340",
  appId: "1:944499555340:web:96eb19cc89bd1ddc814229"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
