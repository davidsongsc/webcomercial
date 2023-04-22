import React from 'react';
import dados from '../configure.json';

function Footer() {
    return (
        <>
            <footer>
                <img className='logoFooter' src='https://dagesico.pythonanywhere.com/static/img/demas/logodemas.webp' alt='' />
                <section>
                    <aside>
                        <h1>Endereço</h1>
                        <text>Rua das Rosas 126 - Vila Valqueire - RJ</text>
                    </aside>
                    <aside>
                        <h1>Contato</h1>
                        <text><a href="tel:+552121461869">(21) 2146-1869</a> - Valqueire</text>
                    </aside>
                    <aside>
                        <h1>Midias Sociais</h1>
                        <text>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-instagram-1.png' alt='' />
                        </text><text>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-6.png' alt='' />
                        </text><text>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-spotify-1.png' alt='' />
                        </text>


                    </aside>
                </section>
                <p>Restaurante {dados.dados.titulo} - Todos os direitos reservados</p>
            </footer>
        </>
    )
}

export default Footer;
