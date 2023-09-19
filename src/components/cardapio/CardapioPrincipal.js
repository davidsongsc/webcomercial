import React from 'react';
import { useParams } from 'react-router-dom';
import Main from './Main';

import './Cardapio.css';
function Cardapio({dados, gp, api}) {
    const { tipo } = useParams();
    return (
        <>
           <div className='novidades'>
            <Main grupoh={gp} api={api}/>
            <h2>{tipo}</h2>
            
            </div>

           


        </>
    )
}

export default Cardapio;
