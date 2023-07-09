import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";
import Painel from "../perfil/Painel";
import SocketPage from "./Api/Socket";


function Login({ api }) {
  const history = useNavigate();

  const [usuario, setUsername] = useState("");
  const [senha, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const chave = 'abc123'


  function handleLogin(event) {
    event.preventDefault();
    $.ajax({
      url: "http://192.168.0.50:5000/login",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        username: usuario,
        password: senha,
      }),

      // Armazenar o token de acesso no cookie ou no armazenamento local

      success: function (response) {
        sessionStorage.setItem('usuario', response.usuario.toString());
        sessionStorage.setItem('id', JSON.stringify(response.id));
        sessionStorage.setItem('pedidoIdUsuario', JSON.stringify(response.pedido));
        sessionStorage.setItem('autenticado', true);
        localStorage.setItem('autenticado', true);
        localStorage.setItem('access_token', JSON.stringify(response.access_token));
        localStorage.setItem('usuario', JSON.stringify(response.usuario));
        localStorage.setItem('pedidoIdUsuario', parseInt(response.pedido).toString());
        setAutenticado(true);
        console.log(response.id);
        history('/fila');
      },
      error: function (error) {
        console.log(error);
        setAutenticado(false);
        alert('Usuario ou Senha invalidos. Clique em "Esqueceu a senha?" para redefinir sua senha.');
      }
    });
  }
  useEffect(() => {
    // Recupere os dados do localStorage
    const autenticadoLocalStorage = localStorage.getItem('autenticado');
    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario'));

    // Verifique se o usuário está autenticado
    if (autenticadoLocalStorage && usuarioLocalStorage) {
      setAutenticado(true);

    }
  }, []);

  useEffect(() => {
    const token = chave;
    console.log(token);

    fetch(`http://192.168.0.50:5000/usuario?nome=${JSON.parse(localStorage.getItem('usuario'))}&token=${token}`)
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem('usuario', data.nome);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);


  function handleLogout() {
    // Limpa o cache da sessão
    window.sessionStorage.clear();

    // Limpa o cache do armazenamento local
    window.localStorage.clear();

    // Recarrega a página para aplicar as alterações
    window.location.reload();
    setAutenticado(false);



  }




  return (
    <div>
      <BaseLogo api={api} />
      <SocketPage />
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
      <Painel
        autenticado={autenticado}
        handleLogout={handleLogout}
      />
      <Footer />

    </div>
  );
}

export default Login;
