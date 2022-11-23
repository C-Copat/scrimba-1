import React from 'react';
import ReactDOM from 'react-dom/client';

// Components:
import './index.css';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>
);