import React from 'react';
import Slide from './Slide';
import Conteudo from './Conteudo';
import Conteudoduo from './Conteudoduo';
import Reservas from './Reservas';

function Cardapio() {
    return (
        <>
            <div >
                <div className='novidades'>
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
