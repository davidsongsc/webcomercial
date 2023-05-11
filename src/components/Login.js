import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";


function Login() {
  const history = useNavigate();

  const [usuario, setUsername] = useState("");
  const [senha, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const chave = 'abc123'

  function handleLogin(event) {
    event.preventDefault();
    $.ajax({
      url: "https://dagesico.pythonanywhere.com/login",
      //url: "http://192.168.0.50:5000/login",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        username: usuario,
        password: senha,
      }),

      // Armazenar o token de acesso no cookie ou no armazenamento local

      success: function (response) {
        sessionStorage.setItem('usuario', JSON.stringify(response.usuario));
        localStorage.setItem('autenticado', true);
        localStorage.setItem('access_token', JSON.stringify(response.access_token));
        setAutenticado(true);
        history('/inicio');
      },
      error: function (error) {
        console.log(error);
        setAutenticado(false);
        alert('Usuario ou Senha invalidos. Clique em "Esqueceu a senha?" para redefinir sua senha.');
      }
    });
  }

  useEffect(() => {
    const token = chave;
    console.log(token)
    //axios.get('http://192.168.0.50:5000/usuario', {
    axios.get('https://dagesico.pythonanywhere.com/usuario', {
      params: {
        nome: 'davidsongsc',
        token: token
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setNomeUsuario(response.data.nome);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);

  function handleLogout() {
    sessionStorage.removeItem('usuario');
    localStorage.removeItem('autenticado');
    setAutenticado(false);
    setNomeUsuario("");
  }

  if (autenticado) {
    return (
      <div>
        <p>{nomeUsuario} já está autenticado!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <BaseLogo />
      {autenticado === false && (
        <div className='login-grupo-stantment'>

          <div className='area-login'>

            <div className='i-l-b-login-g'>
              <input
                type="text"
                placeholder="ID"
                value={usuario}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button onClick={handleLogin}>Login</button>

              <>
                <p>Entre com seu ID e Senha. <br /></p>
                <p>Ainda não é cadastrado? Cadastre-se aqui!</p>
                <button >Esqueceu a senha?</button>
              </>

            </div>

          </div>
        </div>
      )}
      <Footer />

    </div>
  );
}

export default Login;
