import Api from './Api/ModoOperacional';
import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
Modal.setAppElement("#root");

function BaseLogo() {
    const [showModal, setShowModal] = useState(false);
    const [seLojaAberta, setLojaAberta] = useState('fechada');
    const dados = [
        { dia: 'Segunda-feira', horario: '17:00 às 23:00' },
        { dia: 'Terça-feira', horario: '17:00 às 23:00' },
        { dia: 'Quarta-feira', horario: '17:00 às 23:00' },
        { dia: 'Quinta-feira', horario: '17:00 às 23:00' },
        { dia: 'Sexta-feira', horario: '17:00 às 23:00' },
        { dia: 'Sabado', horario: '17:00 às 23:00' },
        { dia: 'Domingo', horario: '17:00 às 23:00' },

        // adicione mais objetos para exibir mais dados
    ];
    useEffect(() => {
        setLojaAberta('fechada')
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <Modal isOpen={showModal} onRequestClose={toggleModal} className='modolo-delvery-pn'>
                <main>

                    <aside>
                        <table>
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dados.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.dia}</td>
                                        <td>{item.horario}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </aside>


                </main>
            </Modal>
            <div className="principal-demas">
                <div className="imagem-principal" >


                </div>

                <div className="principal-demas-titulo" style={{display: 'none'}}>
                    <h1>{/*palavra1*/} <img className='logoheader' src={`${Api()}/static/img/demas/logoteste.png`} alt='' /> {/*palavra2*/}</h1>
                    <div className='hoolly-wood-principal'><br />
                        <a className='telefone-tela' href='tel:+552121461869' alt='Ligar para Loja.'>
                            <img src='https://svgsilh.com/svg/157358.svg' alt='Ligar para loja.' />
                        </a>
                        <a className='loja-seletor-painel' href='#' alt='' onClick={toggleModal}>Loja {seLojaAberta} </a>
                        <div className={`logoFunctionIndicador ${seLojaAberta}`} />
                    </div>




                </div>

                <div className='divisao' />




            </div>
        </>
    )
}

export default BaseLogo;
