import React from 'react';
import Slide from './Slide';
import Conteudo from './Conteudo';
import MainUsuario from './MainUsuario';
import Conteudoduo from './Conteudoduo';
import Reservas from './Reservas';

function Cardapio() {
    return (
        <>
            <div >
                <div className='novidades'>
                    <MainUsuario grupoh={0} />
                    <Slide />

                    <Conteudo />
                    <Conteudoduo />
                    <Reservas />
                </div>
                {/*<Banner dados={dados} />*/}


            </div>
        </>
    )
}

export default Cardapio;
