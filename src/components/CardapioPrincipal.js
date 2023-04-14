import React from 'react';
import { useParams } from 'react-router-dom';
import Main from './Main';

import './Cardapio.css';
function Cardapio({dados, gp}) {
    const { tipo } = useParams();
    return (
        <>
           <div className='novidades'>
            <Main grupoh={gp}/>
            <h2>{tipo}</h2>
            
            </div>

           


        </>
    )
}

export default Cardapio;
