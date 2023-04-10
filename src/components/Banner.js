import React, { useEffect } from 'react';
import '../styles/Banner.css';
import imagensJson from './banner.json';

function Banner(dados) {
    useEffect(() => {
        const banner = document.getElementById("banner");
        const imagens = banner.getElementsByClassName("imp-cj");
        let index = 0;

        // exibe a primeira imagem
        imagens[index].classList.add("active");

        // define o intervalo de tempo para trocar a imagem
        const intervalId = setInterval(function () {
            // remove a classe "active" da imagem atual
            imagens[index].classList.remove("active");

            // atualiza o index para a próxima imagem
            index++;

            // se atingiu o fim do banner, volta para o início
            if (index >= imagens.length) {
                index = 0;
            }

            // adiciona a classe "active" para exibir a próxima imagem
            imagens[index].classList.add("active");
        }, 7000); // troca a imagem a cada 8 segundos

        // retorna uma função de limpeza para remover o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []); // observe a dependência vazia para executar o efeito apenas uma vez

    return (
        <div id="banner">
            {imagensJson.imagens.map((imagem, index) => (
                <li key={index} id={`conjunto-img-banner-${imagem.tipo}`} className="imp-cj">
                    <p>
                        <div className='cjt-bn-dv'>



                            <text>
                                <div className='img-iim-g'>
                                    <img src={imagem.url} alt={imagem.alt} />


                                    {imagem.descricao} {imagem.codigo}
                                </div>
                           
                            </text>

                        </div>
                    </p>



                </li>
            ))}
        </div>
    );
}

export default Banner;
