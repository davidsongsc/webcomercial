import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProdutoUsuario from './ProdutoUsuario';
import ApiGrupo from './ApiGrupo';
import ApiUsuario from './ApiUsuario';

function MainUsuario({ grupoh }) {
    const [produtos, setProdutos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState(Number(grupoh));
    const [grupos, setGrupos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [paginaterior, setPaginaAnt] = useState('cardapio/principal');
    const [paginaInicial, setPaginaInicial] = useState('cardapio/principal');


    const navigate = useNavigate();

    const handleGrupoClick = (id) => {
        setGrupoSelecionado(id);
        if (id === 1) {
            var coDeudo = '/cardapio/principal'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
            setGrupoSelecionado(id);
        } 
        if (id === 10) {
            var coDeudo = '/cardapio/executivo'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
        }
        if (id === 12) {
            var coDeudo = '/cardapio/jackribs'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
        }
        if (id === 60) {
            var coDeudo = '/cardapio/bebidas'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
        }
        if (id === 61) {
            var coDeudo = '/cardapio/sucos'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
        }
        if (id === 6615) {
            var coDeudo = '/cardapio/entradas'
            navigate(coDeudo, { replace: true });
            setPaginaAnt(coDeudo)
        }
        if (id === 2255) {
            navigate('/cardapio/cardapio', { replace: true });

        }
    };
    if (grupoh === 0) {
        console.log("testefun: OK");
    }
    useEffect(() => {
        async function carregarProdutos() {
            const produtos = await ApiUsuario();
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

    return (

        <div>
            {carregando ? (
                <>
                    <div className="menu-usuario-main-principal">
                        <aside className="hh-asride-menu-usuario-main">
                            <div className="cardapio-usuario-menu">
                                <div className="loading-bar"></div>
                                <h2>Carregando...</h2>
                                <text>...</text>
                                <h3>...</h3>

                            </div>
          
                        </aside>
                        <aside className="sh-asride-menu-usuario-main">
                            <div className="loading-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </aside>
                    </div>

                </>
            ) : (
                <div className='d-main-usuario-principal'>
                    <div className='menu-usuario-main-principal'>
                        <aside className='hh-asride-menu-usuario-main'>

                            {grupos
                                .filter((grupo) => grupo.grupo_chave === grupoh)
                                .map((grupo) => (
                                    <div className='cardapio-usuario-menu' onClick={() => handleGrupoClick(grupo.grupocombo)}>
                                        <h2>{grupo.nome}</h2>
                                        <text>{grupo.grupo_desc}</text>
                                        <h3>{grupo.subnome}</h3>

                                    </div>
                                ))}

                        </aside>

                        <aside className='sh-asride-menu-usuario-main' >
                            {produtos
                                .filter((produto) => produto.grupo === grupoSelecionado)
                                .map((produto) => (
                                    <ProdutoUsuario produto={produto} carregandoCmd={true} />
                                ))}
                        </aside>

                    </div>
                </div>
            )}
        </div>
    )
}

export default MainUsuario;
