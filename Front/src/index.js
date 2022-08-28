import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/minty/bootstrap.min.css'; 
import './index.css';
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentes/home/Home';
import Home2 from './componentes/login/jugador/home/Home2';
import Reset2 from './componentes/menu/signIn/Reset2';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login/jugador" element={<Home2/>}></Route>
        <Route path="/reset/:token" element={<Reset2/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);