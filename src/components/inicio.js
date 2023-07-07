import React from "react";
import Cardapio from "./Cardapio";
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";
import Slider from './Slide';

function Inicio({ api }) {
    // const [palavra1, palavra2] = dados.dados.titulo.split(' & ');

    return (
        <>
            <Slider api={api} />
            <BaseLogo api={api} />

            <div className="conteudo-principal">
                <div className="conteudo-principal-demas">
                    {<Cardapio api={api} />}
                </div>
            </div>

            <footer />
            <footer />
            <Footer />

        </>
    );
};

export default Inicio;
