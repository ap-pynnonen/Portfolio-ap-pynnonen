import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { LocalizationProvider } from './LocalizationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <LocalizationProvider>
        <App />
      </LocalizationProvider>
     </Router>
  </React.StrictMode>
);

