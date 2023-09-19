import React, { useState, useEffect } from 'react';

function Autenticado() {
    const [autenticado, setAutenticado] = useState(false);
  
    useEffect(() => {
      // Verifique se o usuário está autenticado no sessionStorage
      const usuarioSessionStorage = sessionStorage.getItem('usuario');
      const autenticadoSessionStorage = sessionStorage.getItem('autenticado');
  
      if (usuarioSessionStorage && autenticadoSessionStorage) {
        setAutenticado(true);
      } else {
        setAutenticado(false);
      }
    }, []);
  
    return (
      <div>
        {autenticado ? (
          <p>Usuário autenticado: {sessionStorage.getItem('usuario')}</p>
        ) : (
          null
        )}
      </div>
    );
  }
  
  export default Autenticado;
  