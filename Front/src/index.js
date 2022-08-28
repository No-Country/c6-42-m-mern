import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< Updated upstream
//import 'bootswatch/dist/minty/bootstrap.min.css'; 
=======
import 'bootswatch/dist/minty/bootstrap.min.css'; 
>>>>>>> Stashed changes
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentes/home/Home';
import Home2 from './componentes/login/jugador/home/Home2';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import Reset2 from './componentes/menu/signIn/Reset2';
>>>>>>> Stashed changes
=======
import Reset2 from './componentes/menu/signIn/Reset2';
import NoPage from './componentes/NoPage';
import Exito from './componentes/login/jugador/home/reservas/Exito'
import NoExito from './componentes/login/jugador/home/reservas/NoExito'
>>>>>>> Stashed changes

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
<<<<<<< Updated upstream
        <Route path="/login/jugador" element={<Home2/>}></Route>
<<<<<<< Updated upstream
=======
        <Route path="/reset/:token" element={<Reset2/>}></Route>
>>>>>>> Stashed changes
=======
        <Route path="/login" element={<Home2/>}></Route>
        <Route path="/reset" element={<Reset2/>}></Route>
        <Route path="/nopage" element={<NoPage/>}></Route>
        <Route path="/success" element={<Exito/>}></Route>
        <Route path="/unsuccess" element={<NoExito/>}></Route>
        <Route path="*" element={<NoPage />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< Updated upstream
root.render(<App />);
=======
root.render(<App />);
>>>>>>> Stashed changes
