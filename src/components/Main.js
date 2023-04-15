import React, { useState, useEffect } from 'react';

import dados from '../configure.json';
import Produto from './Produtos';
import ApiGrupo from './ApiGrupo';
import Api from './Api';


function Main({ grupoh }) {
    const [produtos, setProdutos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState(grupoh);
    const [grupos, setGrupos] = useState([]);
    const [carregando, setCarregando] = useState(true);


    const handleGrupoClick = (id) => {
        
        setGrupoSelecionado(id);
    };
    if (grupoh === 0) {
        console.log("testefun: OK");
    }
    useEffect(() => {
        async function carregarProdutos() {
            const produtos = await Api();
            setProdutos(produtos);
            setCarregando(false);
        }
        carregarProdutos();
    }, []);

    useEffect(() => {
        async function carregarGrupos() {
            const grupos = await ApiGrupo();
            setGrupos(grupos);
            setCarregando(false);

        }
        carregarGrupos();
    }, []);
    if (carregando) {
        return (
            <div className='carregando-carregamentos'>
                <h4>Carregando...</h4>
            </div>)
    }


    return (
        <>

            <main>

                <section>
                    {grupos.filter(grupo => grupo.grupo_chave === grupoSelecionado).map((grupo) => (

                        <article className={`abertura-cardapio ${grupo.cmd}`} onClick={() => handleGrupoClick(grupo.grupocombo)}>

                            <div className='titulos-abertura'>

                                <h2>{grupo.nome} </h2>
                                <h3>{grupo.subnome}</h3>
                                <p>{grupo.grupo_desc}</p>
                            </div>

                            <div className={`quadro`}>
                                <figure>
                                    <div id='imgfigura-01' className={`principal-img ${grupo.cmdl}`} alt={dados.dados.titulo} />

                                    {/*} <figcaption>Imagem ilustrativa do Restaurante {dados.dados.titulo} &reg;</figcaption>*/}
                                </figure>
                            </div>
                        </article>

                    ))}
                    <>


                        {produtos.filter((produto) => produto.grupo === grupoSelecionado).map((produto) => (
                            <Produto key={produto.id} produto={produto} />
                        ))}

                    </>

                </section>


            </main>


        </>
    )
}

export default Main;
