import React, { useState, useEffect } from 'react';


import Produto from '../produtos/Produtos';
import ApiGrupo from '../Api/ApiGrupo';
import Api from '../Api/Api';


function Main({ grupoh, api }) {
    const [produtos, setProdutos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState(grupoh);
    const [grupos, setGrupos] = useState([]);
    const [carregando, setCarregando] = useState(true);


    const handleGrupoClick = (id) => {

        setGrupoSelecionado(id);
    };
    if (grupoh === 0) {
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
            <>

                <main>

                    <section>


                        <article className={`abertura-cardapio `} >

                            <div className='titulos-abertura'>

                                <h2> ... </h2>
                                <h3> ... </h3>
                                <p> ... </p>
                            </div>

                            <div className={`quadro`}>
                                <figure>
                                    <div id='imgfigura-01' className={`principal-img `} alt="Imagem" />
                                </figure>
                            </div>
                        </article>


                        <>


                            <Produto key={0} produto={0} api={api} />
                            <Produto key={0} produto={0} api={api} />
                            <Produto key={0} produto={0} api={api} />
                            <Produto key={0} produto={0} api={api} />


                        </>

                    </section>


                </main>


            </>

        )
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
                                    <div id='imgfigura-01' className={`principal-img ${grupo.cmdl}`} alt="Titulo" />


                                </figure>
                            </div>
                        </article>

                    ))}
                    <>


                        {produtos.filter((produto) => produto.grupo === grupoSelecionado).map((produto) => (
                            <Produto key={produto.id} produto={produto} api={api} />
                        ))}

                    </>

                </section>


            </main>


        </>
    )
}

export default Main;
