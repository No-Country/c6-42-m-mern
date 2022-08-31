import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SessionContext } from './componentes/context/sessionContext';
import Home from './componentes/home/Home';
import Home2 from './componentes/login/jugador/home/Home2';

function App() {
  const { userInfo } = useContext(SessionContext);

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login/:jugador" element={userInfo?.username ? <Home2 /> : <Navigate to='/' />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;