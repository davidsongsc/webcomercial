import React, { useState, useEffect } from "react";
import { logoutUser } from "../../redux/user/actions";

function Logout() {


  const [autenticado, setAutenticado] = useState(false);


  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const autenticado = localStorage.getItem('autenticado');
    if (usuario && autenticado) {
      setAutenticado(true);
    }
  }, []);

  const handleLogoutState = () => {
    dispatch(logoutUser())
  }
  
  function handleLogout() {
    // Limpa o cache da sessão
    window.sessionStorage.clear();

    // Limpa o cache do armazenamento local
    window.localStorage.clear();

    handleLogoutState();

    // Recarrega a página para aplicar as alterações
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
    <>
      {autenticado === true && (
        <div className='login-grupo-stantment'>
          <button onClick={handleLogout}>Logout</button>



        </div>
      )
      }
      {autenticado === false && (handleLogout())}

    </>
  );
}

export default Logout;
