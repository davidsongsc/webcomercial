import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dados from '../configure.json';
import Slider from './Slide';



function Header({ api }) {
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = window.matchMedia("(max-width: 960px)").matches;
    const [palavra1, palavra2] = dados.dados.titulo.split(' & ');
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleMenuClickFechar = () => {
        setMenuOpen(false);
        {/*
        if (isMobile) {
           
        }
 */}
    };
    {/*
    const handleCardapiolClick = (event) => {
        event.preventDefault();
        navigate('/principal/cardapio', { replace: true });
        handleMenuClickFechar();
    };
     */}
    const handleCardapioUsuariolClick = (event) => {
        event.preventDefault();
        navigate('/cardapio/entradas', { replace: true });
        handleMenuClickFechar();
    };

    const handleInicioClick = (event) => {
        event.preventDefault();
        handleMenuClickFechar();
        navigate('/inicio', { replace: true });
    };
    const handleQuemSomosClick = (event) => {
        event.preventDefault();
        handleMenuClickFechar();
        navigate('/sobre', { replace: true });
    };
    /*
        const handlePrincipalClick = (event) => {
            event.preventDefault();
            navigate('/demas/principal', { replace: true });
        };
    
        const handleExecutivoClick = (event) => {
            event.preventDefault();
            navigate('/almoco/executivo', { replace: true });
        };
    
        const handleSobremesaClick = (event) => {
            event.preventDefault();
            navigate('/sobremesa/sobremesa', { replace: true });
        };
    */
    const handleLojaClick = (event) => {
        event.preventDefault();
        handleMenuClickFechar();
        navigate('/loja');
    };
    const handleFilaClick = (event) => {
        event.preventDefault();
        handleMenuClickFechar();
        navigate('/fila');
    };
    const handleReservasClick = (event) => {
        event.preventDefault();
        handleMenuClickFechar();
        navigate('/reserva');
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = document.querySelector('header').offsetHeight;

            setIsFixed(scrollTop > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <header>
                {/*
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 353.684 336.37" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.684 336.37" role="presentation" aria-hidden="true">
                    <g>
                        <path d="M176.842 0l54.634 110.714 122.208 17.77-88.432 86.194 20.877 121.692-109.287-57.449L67.535 336.37l20.876-121.692L0 128.484l122.189-17.77L176.842 0z"></path>
                    </g>
                </svg>
                <h1>{palavra1} <img className='logoheader' src='http://192.168.0.50:5000/static/img/demas/logoteste.svg' alt='' /> {palavra2}</h1>
                <h2>{dados.dados.stitulo}</h2>
                */}
            </header>

            <nav className={isFixed ? 'menu fixed' : `menu ${menuOpen ? 'menu-open' : ''}`}>
                <div className='menu-icon' onClick={handleMenuClick}>
                    <span></span>

                    <span></span>
                    <span></span>
                </div>
                <img className='logo' src={`${api()}/static/img/demas/logoteste.png`} alt='' />

                <ul className={`menu-items ${menuOpen ? 'menu-items-aberto' : 'menu-items-fechado'}`}>

                    <div className='div-menu-lateral'>
                        <li>

                            <a href="/inicio" onClick={handleInicioClick}>

                                <p>Home</p></a>
                        </li>
                        {/*
                        <li>
                            <a href="/cardapio" onClick={handleCardapiolClick}>
                                <img src='https://cdn-icons-png.flaticon.com/512/3428/3428655.png' alt='cardapio' />
                                <p>GCardápio</p></a>
                        </li>
                         */}
                        <li>
                            <a href="/cardapio" onClick={handleCardapioUsuariolClick}>

                                <p>Cardápio</p></a>
                        </li>
                        <li>

                            <a href='/loja' onClick={handleLojaClick}>

                                <p>Loja</p></a>
                        </li>
                        <li>

                            <a href='/quemsomos' onClick={handleQuemSomosClick}>

                                <p>quemsomos</p></a>
                        </li>
                        <li>

                            <a href='/fila' onClick={handleFilaClick}>

                                <p>Fila de Espera</p></a>
                        </li>
                        <li>

                            <a href='/reserva' onClick={handleReservasClick}>

                                <p>Reservas</p></a>
                        </li>
                        <li className='menu-fechar-ocioso'>

                            <a href='#fecharMenu' onClick={handleMenuClick}>
                                <p>Fechar Menu</p></a>
                        </li>

                    </div>
                </ul>

            </nav>
            <Slider api={api} />


        </>
    )
}

export default Header;