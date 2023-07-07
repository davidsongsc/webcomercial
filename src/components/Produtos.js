import React, { useState } from 'react';


/*
function Produto_imagem(nome_produto) {
  return `http://${dados.ip}:5000/static/img/produtos/${nome_produto}.png`;;
}
*/

function Produto({ produto, api }) {

  const [produtoAberto, setPAberto] = useState(false);
  const [width, setWidth] = useState(352);
  const [dplay, setDplay] = useState('none');

  const handleMenuProdutoClick = () => {
    setPAberto(!produtoAberto);
  };
  const handleClick = () => {
    handleMenuProdutoClick();
    if (produtoAberto === false) {
      setDplay('block');
      setWidth(352);
    } else {
      setDplay('none');
      setWidth(352);
    }

  };


  return (
    <article style={{
      width: `${width}px`,
      transition: 'all 1.1s ease',
    }} onClick={handleClick}>
      <h2 className={`titulo-produto ${produtoAberto}`}>{produto.nomefantasia}</h2>
      <div className='grupo-nome-descricao' style={{ display: `${dplay}` }} >

        <p>
          {produto.descricao}

        </p>

      </div>
      <h4 id='avaliacao-produto'>{produto.avaliacao}</h4>
      <div className='grupo-valor-descricao'>
      <text>R$ </text><h3>{produto.valor.toFixed(2)}</h3>
      </div>

    
          <div className='butao-compra-div-n'>
            <button className='btn-adicionar'>Adicionar</button>
            <button className='btn-remover'>Remover</button>
          </div>
          



    </article>
  );
}

export default Produto;
