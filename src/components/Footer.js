import React from 'react';
import dados from '../configure.json';

function Footer() {
    return (
        <>
            <footer>
                <img className='logoFooter' src='https://dagesico.pythonanywhere.com/static/img/demas/icone.png' alt='' />
                <section>
                    <aside>
                        <h1>Endereço</h1>
                        <span>Rua das Olivas 455 - Parque das Rosas - RJ</span>
                    </aside>
                    <aside>
                        <h1>Contato</h1>
                        <p><a href="tel:+552121212169">(21) 1234-5678</a> </p>


                    </aside>
                    <aside>
                        <h1>Midias Sociais</h1>
                        <span>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-instagram-1.png' alt='' />
                        </span>
                        <span>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-6.png' alt='' />
                        </span>
                        <span>
                            <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-spotify-1.png' alt='' />
                        </span>


                    </aside>
                </section>
                <p>Restaurante {dados.dados.titulo} - Todos os direitos reservados</p>
            </footer>
        </>
    )
}

export default Footer;
