import React from "react";
import Cardapio from "./Cardapio";
import dados from '../configure.json';


function Inicio() {
    // const [palavra1, palavra2] = dados.dados.titulo.split(' & ');

    return (
        <>
            <div className="principal-demas">
                <div className="imagem-principal" >


                </div>
                <div id="conteudoPagina"></div>
                <div className="principal-demas-titulo">
                    <h1>{/*palavra1*/} <img className='logoheader' src='https://dagesico.pythonanywhere.com/static/img/demas/logodemas.webp' alt='' /> {/*palavra2*/}</h1>
                    <h2>{dados.dados.stitulo}</h2>
                    <div className="principal-demas-link">
                        <a href="#conteudoPagina">Entrar</a>

                    </div>
                    <button id="install-button" hidden>Instalar App</button>

                </div>

                <div className='divisao' />

                <div className="conteudo-principal">
                    <div className="conteudo-principal-demas">
                        {<Cardapio />}
                    </div>
                </div>



            </div>
            <footer />
        </>
    );
};

export default Inicio;
