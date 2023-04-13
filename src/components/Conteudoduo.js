import React from "react";
import "./conteudo.css";


function Conteudoduo() {

  return (
    <div>
      <div className="cont-conteudo-sobremesa">
        <div className="cont-conteudo-texto-sobremesa">
          <h1>Sobremesas Divinas</h1>
          <h2>DELICIAS PREPARADAS ESPECIALMENTE PRA VOCÊ!</h2>
          <p>
            Se você ainda não conhece as sobremesas do Demas & Divas não sabe o que esta perdendo! As divinas sobremesas da casa encantam todos os clientes, desde brownies bem macios e saborosos produzidos inteiramente na casa a petit gatou de nutella o cardápio de sobremesa surpreende e muito!

            A escolha de um sorvete de alta qualidade e sem gordura hidrogenada traz um sabor sem igual na composição dessas delícias, o Demas & Divas não terceriza nenhum componente de suas sobremesas, mousses de chocolates ao rum, pettit gatou de chocolate e nutella, brownies e mais brownies, caldas e mais caldas e todas as misturas que você imaginar, totalmente artesanais e feitas com todo carinho no Demas & Divas.
          </p>
        </div>
        <div className="imagens">
        <img src="http://192.168.0.50:5000/static/img/demas/sobremesa04.webp" alt="" />
        <img src="http://192.168.0.50:5000/static/img/demas/sobremesa05.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Conteudoduo;
