import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Provider from './ServiceProvider'

// styles
import './App.css';

import {initializeApp} from "firebase/app";
import firebaseConfig from './firebase';

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider/>
  </React.StrictMode>
);
