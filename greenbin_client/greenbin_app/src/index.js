import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Register from './Register'
// import Provider from './ServiceProvider'
import Home from './components/home';

// styles
import './App.css';

import {initializeApp} from "firebase/app";
import firebaseConfig from './firebase';

// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    {/* <Provider/> */}
    {/* <Register/> */}
  </React.StrictMode>
);
