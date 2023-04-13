import React from "react";
import Cardapio from "./Cardapio";
import "./inicio.css";
import dados from '../configure.json';

function Inicio() {
    // const [palavra1, palavra2] = dados.dados.titulo.split(' & ');

    return (
        <>
            <div id="conteudoPagina"></div>
            <div  className="principal-demas">
                <div className="imagem-principal" >
                    <div className="principal-demas-titulo">
                        <h1>{/*palavra1*/} <img className='logoheader' src='http://192.168.0.50:5000/static/img/demas/logodemas.webp' alt='' /> {/*palavra2*/}</h1>
                        <h2>{dados.dados.stitulo}</h2>
                        <div className="principal-demas-link">
                            <a href="#conteudoPagina">Entrar</a>
                        </div>
                    </div>

                </div>
                <div  className='divisao' />
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
