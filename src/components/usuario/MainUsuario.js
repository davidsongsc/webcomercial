import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProdutoUsuario from '../produtos/ProdutoUsuario';
import ApiGrupo from '../Api/ApiGrupo';
import ApiUsuario from '../Api/ApiUsuario';



function MainUsuario({ grupoh, api }) {
    const [produtos, setProdutos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState(Number(grupoh));
    const [grupos, setGrupos] = useState([]);
    const [styles, setStyles] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const location = useLocation();
    const [paginaterior, setPaginaAnt] = useState('cardapio/principal');
    const [paginaInicial, setPaginaInicial] = useState('cardapio/principal');
    const [isFixed, setIsFixed] = useState(false);
    const navigate = useNavigate();


    function JackRibs() {
        return (
            <div className="jackribs" style={{ height: '100vh', letterSpacing: '2px', fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 400 }}>
                <h1 style={{ fontSize: '69px', textTransform: 'uppercase', color: '#b82926', textAlign: 'left', height: '125px' }}>Jack Ribs</h1>
                <div style={{ display: 'flex' }}>
                    <h2 style={{ color: '#93211e', fontSize: '28px', position: 'relative', top: '-52px' }}>OLDSCHOOL</h2>
                    <h3 style={{ fontSize: '49px', position: 'relative', color: '#b82926', top: '-63px', left: '-4px' }}>DEMAS SEASON</h3>
                </div>
                <img src={`${api()}/static/img/demas/gastronomiaprincipal.png`} alt="" />
            </div>
        );
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const grupoFixoEl = document.getElementsByClassName('hh-asride-menu-usuario-main')[0];
            const alturaMinima = window.innerHeight * 0.4; // 10vh em pixels

            setIsFixed(grupoFixoEl && scrollTop > alturaMinima && scrollTop > grupoFixoEl.clientHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const menuMain = document.querySelector('.sh-asride-menu-usuario-main');

        if (location.pathname === '/cardapio/jackribs' && menuMain) {
            // Personalize o estilo para a página Jack Ribs
            document.body.style.backgroundColor = 'black';
            menuMain.style.backgroundColor = 'black';

            menuMain.style.transition = '2s';

        } else if (location.pathname === '/cardapio/entradas' && menuMain) {
            // Personalize o estilo para a página Jack Ribs

            menuMain.style.backgroundColor = '#FB8400';
            menuMain.style.transition = '2s';

        }

        else {
            // Personalize o estilo para outras páginas
            document.body.style.backgroundColor = '#97AFC2';
            document.body.style.transition = '2s';
            if (menuMain) {

                menuMain.style.removeProperty('background-color');
                menuMain.style.removeProperty('height');

            }
        }
    }, [location]);


    useEffect(() => {
        async function carregarProdutos() {
            const produtos = await ApiUsuario();
            setProdutos(produtos);
            setCarregando(false);
        }
        carregarProdutos();
    }, []);

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
    };

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
                        <aside className={`hh-asride-menu-usuario-main ${isFixed ? 'grupo-fix' : ''}`} >

                            {grupos
                                .filter((grupo) => grupo.grupo_chave === grupoh)
                                .map((grupo) => (
                                    //<button style={{backgroundImage: `url('https://dagesico.pythonanywhere.com/static/img/demas/${grupo.nome}.jpg')`, backgroundSize: 'cover', transition: '.7s'}} className={`botao-cardapio-grupo ${isFixed ? 'botao-fix' : ''}`} onClick={() => handleGrupoClick(grupo.grupocombo)}>


                                    <div className={`cardapio-usuario-menu ${isFixed ? 'grupo-titulo-main' : ''}`} onClick={() => handleGrupoClick(grupo.grupocombo)}>

                                        <h1>{grupo.nome}</h1>


                                    </div>

                                ))}

                        </aside>

                        <aside className='sh-asride-menu-usuario-main-produtos' >
                            {location.pathname === '/cardapio/jackribs' && <JackRibs />}
                            {/* Coloque aqui os componentes de outras páginas */}
                            {produtos
                                .filter((produto) => produto.grupo === grupoSelecionado)
                                .map((produto) => (
                                    <ProdutoUsuario produto={produto} carregandoCmd={true} api={api}/>
                                ))}
                        </aside>

                    </div>
                </div>
            )}

        </div>

    )
}

export default MainUsuario;
