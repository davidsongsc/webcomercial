import React, { useState, useEffect } from "react";
import './loja.css';
import dados from '../configure.json';

const Loja = () => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    // Função assíncrona para carregar as lojas
    async function carregarLojas() {
      // Simula uma requisição assíncrona de API que retorna as lojas
      const response = await fetch(dados);
      console.log(dados.lojas);
      const data = await response.json();
      setLojas(data.lojas);
    }

    carregarLojas();
  }, []); // O array vazio [] como segundo parâmetro indica que o efeito só será executado uma vez, após a montagem do componente

  const listaDeLojas = lojas.map((loja) => {
    return (
      <div key={loja.nomeLoja}>
        <h2>{loja.nomeLoja}</h2>
        <p>{loja.dados.rua}, {loja.dados.bairro} - {loja.dados.cidade}/{loja.dados.estado}</p>
        <p>Telefone: ({loja.dados.ddd}) {loja.dados.telefone1}</p>
        <p>E-mail: {loja.dados.email}</p>
      </div>
    );
  });

  return <div>{listaDeLojas}</div>;
};

export default Loja;
