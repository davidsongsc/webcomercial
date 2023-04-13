import React from 'react';
import Main from './Main';
import Slide from './Slide';
import Conteudo from './Conteudo';
import Conteudoduo from './Conteudoduo';
import Reservas from './Reservas';

function Cardapio({ dados, gp }) {
    return (
        <>
            <div >
                <div className='novidades'>
                    <Slide />
                  
                    <Conteudo />
                    <Conteudoduo />
                    <Reservas />
                    <Main grupoh={gp} />


                </div>
                {/*<Banner dados={dados} />*/}


            </div>
        </>
    )
}

export default Cardapio;
