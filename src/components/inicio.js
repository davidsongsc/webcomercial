import React from "react";
import Cardapio from "./Cardapio";
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";


function Inicio() {
    // const [palavra1, palavra2] = dados.dados.titulo.split(' & ');

    return (
        <>
            <BaseLogo/>
            <div className="conteudo-principal">
                    <div className="conteudo-principal-demas">
                        {<Cardapio />}
                    </div>
                </div>

            <footer/>
            <footer/>
            <Footer/>
     
        </>
    );
};

export default Inicio;
