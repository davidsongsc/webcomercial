import React, { useState, useEffect } from 'react';
import Produto from './Produtos';
import Api from './Api';
import Aside from './Aside';
import dados from '../configure.json';

function Favoritos(api) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      const produtos = await Api();
      setProdutos(produtos);
      setCarregando(false);
    }
    carregarProdutos();
  }, []);
  if (carregando) {
    return (<div className='carregando-carregamentos'>
      <h4>Carregando...</h4>

    </div>)
  }
  return (
    <>
      <Aside dados={dados}  api={api}/>
      <div className='c-div-cardapio'>
        {/*<h1 className='titulo-cardapio'>Cardapio</h1>*/}
        <div className="cardapio">
          {produtos.map((produto) => (
            <Produto key={produto.id} produto={produto} api={api} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favoritos;
