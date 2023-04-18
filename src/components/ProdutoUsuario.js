import React, { useState, useRef } from 'react';


function ProdutoUsuario({ produto, carregandoCmd }) {
  const [carregado, setCarregado] = useState(true);
  const refContainer = useRef(null);

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
      <div className="valor-produto">
        <text className='sifrao'>R$ </text>
        <text className='valor-produto-valor'>{valor.toFixed(2)}</text>
      </div>
    );
  }


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
                  src={`https://dagesico.pythonanywhere.com/static/img/demas/cardapio/${produto.nomeproduto}.jpg`}
                  alt=""

                />
                <ValorProduto valor={produto.valor} />
                <AvaliacaoProduto nota={produto.avaliacao} />
                

              </div>
              <h1>{produto.nomefantasia}</h1>
            </div>
          </div>
        </aside>
      )}
    </>


  );
}

export default ProdutoUsuario;
