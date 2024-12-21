import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PlayerProvider from './PlayerProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayerProvider />
  </React.StrictMode>
);

