import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);