import React, { useState } from 'react';
import dados from '../configure.json';
import './produtos.css';

/*
function Produto_imagem(nome_produto) {
  return `http://${dados.ip}:5000/static/img/produtos/${nome_produto}.png`;;
}
*/
function demas(nome_produto) {
  return `http://${dados.ip}:5000/static/img/demas/${nome_produto}.jpg`;;
}

function Produto({ produto }) {
  const imagem = demas(produto.nomeproduto);
  const [produtoAberto, setPAberto] = useState(false);
  const [width, setWidth] = useState(300);
  const [dplay, setDplay] = useState('none');

  const handleMenuProdutoClick = () => {
    setPAberto(!produtoAberto);
  };
  const handleClick = () => {
    handleMenuProdutoClick();
    if (produtoAberto === false) {
      setDplay('block');
      setWidth(894);
    } else {
      setDplay('none');
      setWidth(300);
    }

  };


  return (
    <article style={{
      width: `${width}px`,
      transition: 'all 1.1s ease',
    }} onClick={handleClick}>
      <h2 className={`titulo-produto ${produtoAberto}`}>{produto.nomefantasia}</h2>
      <div className='grupo-nome-descricao' style={{ display: `${dplay}` }} >
        <h4 id='avaliacao-produto'>{produto.avaliacao}</h4>
        <p>
          {produto.descricao}

        </p>
        <div className='grupo-valor-descricao'>
          <h3>R$ {produto.valor.toFixed(2)}</h3>
        </div>
      </div>

      <div className='quadro' style={{ transition: '.8s', display: `${dplay}` }}>
        <img className='produto-imagem' src={imagem} alt={produto.nome_produto} />
        {/*<figcaption>Imagem ilustrativa do Restaurante {dados.dados.titulo} &reg;</figcaption>*/}
      </div>
      {/*
          <div className='butao-compra-div-n'>
            <button className='btn-adicionar'>Adicionar</button>
            <button className='btn-remover'>Remover</button>
          </div>
           */}



    </article>
  );
}

export default Produto;
