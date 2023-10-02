import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Slider from './web/Slide';

function Header({ api }) {
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { usuarioCorrente } = useSelector((reducer) => reducer.user);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleMenuClickFechar = () => {
        setMenuOpen(false);
    };

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
                <Slider api={api} />
            </header>
            <nav className={isFixed ? 'menu fixed' : `menu ${menuOpen ? 'menu-open' : ''}`}>
                {isFixed ? <div className='menu-icon' onClick={handleMenuClick}>
                    <span></span>

                    <span></span>
                    <span></span>
                </div> : <></>}

                <img className='logo' src={`${api()}/static/img/demas/logoteste.png`} alt='' />
                {
                    isFixed ?

                        <ul className={`menu-items ${menuOpen ? 'menu-items-aberto' : 'menu-items-fechado'}`}>


                            <li>

                                <a href="/inicio" onClick={handleInicioClick}>

                                    <p>Home</p></a>
                            </li>

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




                        </ul>
                        : <ul className={`menu-items-normal menu-items-aberto`} style={{ display: isFixed ? 'none' : 'flex' }}>


                            <li>

                                <a href="/inicio" onClick={handleInicioClick}>

                                    <p>Home</p></a>
                            </li>

                            <li>
                                <a href="/cardapio" onClick={handleCardapioUsuariolClick}>

                                    <p>Cardápio</p></a>
                            </li>
                            {usuarioCorrente != null ? (
                                <li>

                                    <a href='/carrinho' >

                                        <p>Pedido  <FontAwesomeIcon icon={faShoppingCart} size="16" color="white" /> </p></a>
                                </li>) : (
                                <></>

                            )}
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


                        </ul>
                }


            </nav>



        </>
    )
}

export default Header;