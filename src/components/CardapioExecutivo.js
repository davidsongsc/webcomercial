import React from 'react';
import Aside from './Aside';
import Main from './Main';
//import Banner from './Banner';

function Cardapio({dados, gp, api}) {
    return (
        <>
           <div className='novidades'>
            <Aside dados={dados} api={api}/>
            <Main grupoh={gp} api={api}/>
            </div>
            {/*<Banner dados={dados} />*/}
        </>
    )
}

export default Cardapio;
