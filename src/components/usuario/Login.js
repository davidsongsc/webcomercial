import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";
import BaseLogo from "../BaseLogo";
import Painel from "../usuario/Painel";
import { loginUser } from "../../redux/user/actions";

function Login({ api }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const chave = 'abc123';

  useEffect(() => {
    const autenticadoLocalStorage = localStorage.getItem('autenticado');
    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario'));

    if (autenticadoLocalStorage && usuarioLocalStorage) {
      setAutenticado(true);
    }
  }, []);

  const handleLoginState = (response) => {
    dispatch(loginUser(response));
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    if (usuario !== "" && senha !== "") {
      try {
        const response = await fetch("https://dagesico.pythonanywhere.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usuario,
            password: senha
          }),
        });

        if (response.ok) {
          const data = await response.json();
          sessionStorage.setItem('usuario', data.usuario.toString());
          // ... outros itens do sessionStorage e localStorage
          setAutenticado(true);
          handleLoginState(data);
          history('/fila');
        } else {
          setAutenticado(false);
          alert('Usuário ou senha inválidos. Clique em "Esqueceu a senha?" para redefinir sua senha.');
        }
      } catch (error) {
        console.error("Erro ao efetuar login:", error);
      }
    } else {
      alert("Por favor, entre com um usuário e senha válidos!");
    }
  }

  const handleEsqueceuSenha = () => {
    if (usuario !== "") {
      alert(`Um email será enviado para o usuário: ${usuario}.`);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setAutenticado(false);
  }

  return (
    <div>
      <BaseLogo api={api} />
      {autenticado === false && (
        <div className='login-grupo-stantment'>
          <div className='area-login'>
            <div className='i-l-b-login-g'>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="ID"
                  value={usuario}
                  onChange={(event) => setUsuario(event.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  required
                />
                <button type="submit">Login</button>
              </form>
              <p>Entre com seu ID e Senha.</p>
              <p>Ainda não é cadastrado? Cadastre-se aqui!</p>
              <button onClick={handleEsqueceuSenha}>Esqueceu a senha?</button>
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
