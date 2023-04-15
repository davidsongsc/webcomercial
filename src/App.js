import React from 'react';
import Catalogo from './components/Catalogo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import dados from './configure.json';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Logout from './components/logout';
import CardapioDetalhe from './components/CardapioDetalhe';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Loja from './components/Loja';
import Inicio from './components/inicio';
import CardapioUsuario from './components/CardapioUsuario';


function App() {
  return (
    <BrowserRouter>
      <Header dados={dados} />
      <Routes>
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/principal/:tipo" element={<CardapioDetalhe />} />
        <Route path="/cardapio/:tipo" element={<CardapioUsuario />} />
        <Route path="/demas/:tipo" element={<CardapioDetalhe />} />
        <Route path="/almoco/:tipo" element={<CardapioDetalhe />} />
        <Route path="/sobremesa/:tipo" element={<CardapioDetalhe />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/reserva" element={<Login />} />
        <Route path="/fila" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
