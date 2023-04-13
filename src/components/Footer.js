import React from 'react';
import dados from '../configure.json';

function Footer() {
    return (
        <footer>
            <table>
                <thead>
                    <tr>
                        <th>Endereço</th>
                        <th>Contato</th>
                        <th>Horários</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        
                            Rua das Rosas 126 - Vila Valqueire - RJ</td>
                        <td> - <a href="tel:+552121461869">(21) 2146-1869</a> - Valqueire</td>
                        <td>Valquerie </td>
                    </tr>
                    <tr>
                     
                    </tr>
                    <tr>
                        
                    </tr>

                </tbody>
            </table>
            {/*
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17485.033328543694!2d-43.35710078433561!3d-22.884751563869504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdemas%20e%20divas!5e0!3m2!1spt-BR!2sbr!4v1680785253407!5m2!1spt-BR!2sbr" width="1200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             */}
            <p>Restaurante {dados.dados.titulo} - Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer;
