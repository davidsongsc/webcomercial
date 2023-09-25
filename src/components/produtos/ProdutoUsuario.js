import React, { useState, useRef } from 'react';
import Autenticado from '../Api/Autenticado';

function AvaliacaoProduto({ nota }) {

  const estrelas = [];

  // Loop para criar estrelas preenchidas ou vazias com base na nota
  for (let i = 1; i <= 6; i++) {
    if (i <= nota) {
      estrelas.push(<i className="fas fa-star" key={i}></i>);
    } else {
      estrelas.push(<i className="far fa-star" key={i}></i>);
    }
  }

  return (
    <div className="avaliacao-produto">
      <span className="estrelas">{estrelas}</span>
      {/* <span className="nota">{nota.toFixed(1)}</span>*/}
    </div>
  );
}

function ValorProduto({ valor }) {
  return (
    <div className="valor-produto" style={{ display: 'block' }}>
      <div>R$ {valor.toFixed(2)}</div>
    </div>

  );
}

function ProdutoUsuario({ produto, carregandoCmd, api }) {
  const [carregado, setCarregado] = useState(true);
  const usuario = sessionStorage.getItem('usuario');

  Autenticado();

  return (
    <>
      {!carregado ? (
        <div className="loading-bar"></div>
      ) : (
        <aside className={`as-produtou-usuario `}>
          <div className={`container-produto container`} >

            <div className="container-produto-detalhes">


              <text>{produto.descricao}</text>
              <div className="container-produto-imagem">
               
                <img
                  src={`${api()}/static/img/demas/cardapio/${produto.nomeproduto}.jpg`}
                  alt=""
                />


              </div>
              <div className='container-nome'>
                <h1>{produto.nomefantasia}</h1>
              </div>
              {usuario ?
                  <AvaliacaoProduto nota={produto.avaliacao} /> :
                  ''
                }
              <ValorProduto valor={produto.valor} />



            </div>
          </div>
        </aside>
      )}
    </>


  );
}

export default ProdutoUsuario;
