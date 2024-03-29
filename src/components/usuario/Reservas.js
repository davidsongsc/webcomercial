import React from "react";

function Conteudo({api}) {

  return (
    <div>
      <div className="cont-conteudo">

        <div className="cont-conteudo-texto">
          <h1>Reserve seu momento com os astros de hollywood!</h1>
          <h2>PARA OS MOMENTOS MAIS DOCES</h2>
          <p>
            Reserve seu momento no Demas & Divas e se divirta junto com os astros de cinema, todo o restaurante é ambientado com nos grandes filmes de hollywood, embarque nessa experiência única. Consulte nosso horário de reservas e nossas promoções para aniversariantes e vem pro Demas!
          </p>
        </div>
        <div className="galeria-fotos-reservas">
          <img src="https://dagesico.pythonanywhere.com/static/img/demas/loja1.webp" alt="" />
          <img src="https://dagesico.pythonanywhere.com/static/img/demas/loja2.webp" alt="" />
          <img src="https://dagesico.pythonanywhere.com/static/img/demas/loja3.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Conteudo;
