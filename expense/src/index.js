import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContexProvider from './store/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContexProvider>
    <App />
  </ContexProvider>
);

