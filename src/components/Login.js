import './login.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Login() {
  const history = useNavigate();
  const [usuario, setUsername] = useState("");
  const [senha, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  
function handleLogin(event) {
  event.preventDefault();
  $.ajax({
    url: "http://192.168.0.50:5000/login",
    type: "POST",
    data: {
      usuario: usuario,
      senha: senha,
    },
    success: function(response) {
      sessionStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      localStorage.setItem('autenticado', true);
      setAutenticado(true);
      history('/cardapio');
    },
    error: function(error) {
      console.log(error);
      setAutenticado(false);
      alert('Usuario ou Senha invalidos. Clique em "Esqueceu a senha?" para redefinir sua senha.');
    }
  });
}

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const autenticado = localStorage.getItem('autenticado');
    if (usuario && autenticado) {
      setAutenticado(true);
    }
  }, []);

  function handleLogout() {
    sessionStorage.removeItem('usuario');
    localStorage.removeItem('autenticado');
    setAutenticado(false);
  }

  if (autenticado) {
    return (
      <div>
        <p>Você já está autenticado!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      
        {autenticado === false && (
          <div className='login-grupo-stantment'>

            <div className='area-login'>

              <div className='i-l-b-login-g'>
                <input
                  type="text"
                  placeholder="ID"
                  value={usuario}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(event) => setPassword(event.target.value)}
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

       
      </div>
      );
}

      export default Login;
