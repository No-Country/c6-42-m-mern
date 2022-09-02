import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './componentes/home/Home';
import Home2 from './componentes/login/jugador/home/Home2';
import Reset2 from './componentes/menu/signIn/Reset2';
import NoPage from './componentes/NoPage';
import Exito from './componentes/login/jugador/home/reservas/Exito'
import NoExito from './componentes/login/jugador/home/reservas/NoExito'
import Validation from './componentes/menu/signUp/Success';
import { SessionContext } from './componentes/context/sessionContext';

export default function App() {
  const { userInfo } = useContext(SessionContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:usuario" element={userInfo?.username ? <Home2 /> : <Navigate to='/' />}></Route>
          <Route path="/reset/:token" element={<Reset2 />}></Route>
          <Route path="/nopage" element={<NoPage />}></Route>
          <Route path="/success" element={<Exito />}></Route>
          <Route path="/unsuccess" element={<NoExito />}></Route>
          <Route path="/validation" element={<Validation />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}