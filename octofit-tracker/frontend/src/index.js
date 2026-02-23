import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
// Log the computed API base URL for debugging when available
const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const apiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/`
  : `http://localhost:8000/api/`;
console.log('React app starting. REST API base:', apiBase);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
