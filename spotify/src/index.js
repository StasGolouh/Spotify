import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage';
import Profile from './pages/Profile';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile/>
  </React.StrictMode>
);
reportWebVitals();
