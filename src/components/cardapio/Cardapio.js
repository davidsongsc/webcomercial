import React from 'react';
import Slide from '../web/Slide';
import Conteudo from './Conteudo';
import MainUsuario from '../usuario/MainUsuario';
import Conteudoduo from './Conteudoduo';
import Reservas from '../usuario/Reservas';

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
