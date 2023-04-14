import React from 'react';
import Aside from './Aside';
import Main from './Main';
//import Banner from './Banner';

function Cardapio({dados, gp}) {
    return (
        <>
           <div className='novidades'>
            <Aside dados={dados}/>
            <Main grupoh={gp}/>
            </div>
            {/*<Banner dados={dados} />*/}
        </>
    )
}

export default Cardapio;
