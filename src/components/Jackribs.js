import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function JackRibs() {
    return (
        <div className="jackribs" style={{ letterSpacing: '2px', fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 400 }}>
            <h1 style={{ fontSize: '69px', textTransform: 'uppercase', color: '#b82926', textAlign: 'left', height: '125px' }}>Jack Ribs</h1>
            <div style={{ display: 'flex' }}>
                <h2 style={{ color: '#93211e', fontSize: '28px', position: 'relative', top: '-52px' }}>OLDSCHOOL</h2>
                <h3 style={{ fontSize: '49px', position: 'relative', color: '#b82926', top: '-63px', left: '-4px' }}>DEMAS SEASON</h3>
            </div>
            <img src="https://dagesico.pythonanywhere.com/static/img/demas/gastronomiaprincipal.png" alt="" />
        </div>
    );
}


function Jack() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/cardapio/jackribs') {
            // Personalize o estilo para a página Jack Ribs
            document.body.style.backgroundColor = 'black';
            document.querySelector('.sh-asride-menu-usuario-main')?.style?.cssText = 'background-color: black; height: 90vh;';
        } else {
            // Personalize o estilo para outras páginas
            document.body.style.backgroundColor = 'green';
            document.querySelector('.sh-asride-menu-usuario-main')?.style?.removeProperty('background-color');
            document.querySelector('.sh-asride-menu-usuario-main')?.style?.removeProperty('height');
        }
    }, [location]);

    return (
        <div className="App">
            {location.pathname === '/cardapio/jackribs' && <JackRibs />}
            {/* Coloque aqui os componentes de outras páginas */}
        </div>
    );
}

export default Jack;
