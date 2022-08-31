import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/js/bootstrap.min.js"
import SessionContextProvider from './componentes/context/sessionContext';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SessionContextProvider>
//     <App />
//   </SessionContextProvider>
// );

ReactDOM.render(
  <SessionContextProvider>
    <App />
  </SessionContextProvider>,
  document.getElementById('root')
);
