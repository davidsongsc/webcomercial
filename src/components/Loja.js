import React, { useState } from "react";
import dados from '../configure.json';
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";

const Loja = ({api}) => {
  const [lojaSelecionada, setLojaSelecionada] = useState('lojaA');
  const [lojas] = useState(dados.lojas);

  const handleChange = (event) => {
    setLojaSelecionada(event.target.value);
  };

  const listaLojas = Object.entries(lojas).map(([key, value]) => (
    <option key={key} value={key}>{value.dados.bairro}</option>
  ));


  return (
    <>
    <BaseLogo api={api}/>
      <div className="lojas-container">

        <div className="loja">
          <select value={lojaSelecionada} onChange={handleChange}>
            {listaLojas}
          </select><br />
          <h1>

            {lojas[lojaSelecionada].nomeLoja}<br /> {lojas[lojaSelecionada].dados.bairro}</h1>
          <div className="loja-descrica-map">
            <div className="dados-loja">
              <div className="detalhes-dados-loja">
                <p>Telefone: {lojas[lojaSelecionada].dados.telefone1}</p>
                <p>Rua: {lojas[lojaSelecionada].dados.rua}</p>
                <p>Bairro: {lojas[lojaSelecionada].dados.bairro}</p>
                <p>Cidade: {lojas[lojaSelecionada].dados.cidade}</p>
                <p>Estado: {lojas[lojaSelecionada].dados.estado}</p>
              </div>

            </div>
            <div className="map-loja">
              <iframe src={lojas[lojaSelecionada].dados.mapa} width="650" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapas"></iframe>


            </div>
          </div>
        </div>

      </div>
      <Footer /></>
  );
};

export default Loja;
