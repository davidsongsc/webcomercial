import React, { useEffect, useState } from 'react';
import Catalogo from './components/cardapio/Catalogo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import dados from './configure.json';
import Login from './components/usuario/Login';
import Cadastro from './components/usuario/Cadastro';
import Logout from './components/usuario/logout';
import CardapioDetalhe from './components/cardapio/CardapioDetalhe';
import Sobre from './components/Sobre';
import Loja from './components/Loja';
import Inicio from './components/inicio';
//import Banner from './components/Banner';
import CardapioUsuario from './components/cardapio/CardapioUsuario';
import Api from './components/Api/ModoOperacional';


function App() {
  const [autenticado, setAutenticado] = useState(false);
  

  return (
    <BrowserRouter>
   
      <Header dados={dados} api={Api} />
      <Routes>
        <Route path="/catalogo" element={<Catalogo api={Api} />} />
        <Route path="/" element={<Inicio api={Api} />} />
        <Route path="/inicio" element={<Inicio api={Api} />} />
        <Route path="/principal/:tipo" element={<CardapioDetalhe api={Api} />} />
        <Route path="/cardapio/:tipo" element={<CardapioUsuario api={Api} />} />
        <Route path="/demas/:tipo" element={<CardapioDetalhe api={Api} />} />
        <Route path="/almoco/:tipo" element={<CardapioDetalhe api={Api} />} />
        <Route path="/sobremesa/:tipo" element={<CardapioDetalhe api={Api} />} />
        <Route path="/cadastro" element={<Cadastro api={Api} />} />
        <Route path="/sobre" element={<Sobre api={Api} />} />
        <Route path="/loja" element={<Loja api={Api} />} />
        <Route path="/reserva" element={<Login api={Api} />} />
        <Route path="/fila" element={<Login api={Api} />} />
        <Route path="/logout" element={<Logout api={Api} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
