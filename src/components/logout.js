import React, { useState, useEffect } from "react";


function Logout() {


  const [autenticado, setAutenticado] = useState(false);


  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const autenticado = localStorage.getItem('autenticado');
    if (usuario && autenticado) {
      setAutenticado(true);
    }
  }, []);

  function handleLogout() {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('pedidoIdUsuario');
    sessionStorage.removeItem('autenticado');
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
