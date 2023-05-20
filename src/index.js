import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.js';

const root = document.querySelector('#root');
const clientRoot = ReactDOM.createRoot(root);
clientRoot.render(<App/>);
