import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
import Request from './components/Collectionrequest'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Request />
    </div>
  );
};

export default App;
