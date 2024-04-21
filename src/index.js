import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
 
      <App />
   
  </React.StrictMode>
);

