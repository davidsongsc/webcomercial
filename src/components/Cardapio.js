import React from 'react';
import Slide from './Slide';
import Conteudo from './Conteudo';
import MainUsuario from './MainUsuario';
import Conteudoduo from './Conteudoduo';
import Reservas from './Reservas';

function Cardapio({ api }) {
    return (
        <>
            <div >
                <div className='novidades'>
                    
                    <MainUsuario grupoh={0} api={api} />


                    <Conteudo api={api} />
                    <Conteudoduo api={api} />
                    <Reservas api={api} />
                </div>
                {/*<Banner dados={dados} />*/}


            </div>
        </>
    )
}

export default Cardapio;
