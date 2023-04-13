import React from "react";
import "./conteudo.css";


function Conteudo() {

  return (
    <div>
      <div className="cont-conteudo">
        <img src="https://dagesico.pythonanywhere.com/static/img/demas/gastronomiaprincipal.png" alt="" />
        <div className="cont-conteudo-texto">
          <h1>Gastronomia & Cinema</h1>
          <p>
            Gastronomia e cinema nunca deram tão certo como no Demas & Divas, com um cardápio bem diversificado contando com pratos das principais culinárias, temos costelinhas de porco ao barbecue, burgers artesanais, steaks de primeira linha, massas e quiches, saladas e claro não as famosas sobremesas, que são um destaque na casa.

            Agora imagina tudo isso com um restaurante totalmente ambientado nos principais filmes de Hollywood, isso mesmo, desde o cardápio e pratos com nomes de astros famosos todo o restaurante que se destaca por criar um clima bem descontraído com sofás e penumbras, é totalmente decorado com placas, quadros e painéis de grandes filmes e artistas, proporcionando uma experiência única para quem visita a casa.</p>
        </div>
      </div>
    </div>
  );
};

export default Conteudo;
