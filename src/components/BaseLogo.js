import React from 'react';
import dados from '../configure.json';


function BaseLogo() {
    return (
        <>
            <div className="principal-demas">
                <div className="imagem-principal" >


                </div>

                <div className="principal-demas-titulo">
                    <h1>{/*palavra1*/} <img className='logoheader' src='https://dagesico.pythonanywhere.com/static/img/demas/logodemas.webp' alt='' /> {/*palavra2*/}</h1>
                    <h2>{dados.dados.stitulo}</h2>

                    <button id="install-button" hidden>Instalar App</button>

                </div>

                <div className='divisao' />




            </div>
        </>
    )
}

export default BaseLogo;
