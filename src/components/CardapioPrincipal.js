import React from 'react';
import { useParams } from 'react-router-dom';
import Main from './Main';
//import Banner from './Banner';
import './Cardapio.css';
function Cardapio({dados, gp}) {
    const { tipo } = useParams();
    return (
        <>
           <div className='novidades'>
            <Main grupoh={gp}/>
            <h2>{tipo}</h2>
            
            </div>
            {/*<Banner dados={dados} />*/}
           


        </>
    )
}

export default Cardapio;
