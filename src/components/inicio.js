import React from "react";
import Cardapio from "./cardapio/Cardapio";
import Footer from "./Footer";
import BaseLogo from "./BaseLogo";

function Inicio({ api }) {
    return (
        <>
            <BaseLogo api={api} />
            <div className="conteudo-principal">
                <div className="conteudo-principal-demas">
                    {<Cardapio api={api} />}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Inicio;
