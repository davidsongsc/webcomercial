import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io('http://192.168.0.50:8000');

const SocketPage = () => {
    const [cmd, setCmd] = useState();
    useEffect(() => {

        socket.on('connect', () => {
            console.log('Conectado ao servidor');
        });

    }, []);

    const fetchComandas = () => {
        socket.emit('get_comandas');
    };

    useEffect(() => {
        fetchComandas();
        let comanda;
        let pedidoId;

        console.log(sessionStorage.getItem('pedidoIdUsuario'));
        pedidoId = sessionStorage.getItem('pedidoIdUsuario');
        const idUser = sessionStorage.getItem('id');
        socket.on('comandas', (data) => {

            comanda = data.find((c) => c.cliente === parseInt(idUser));
            setCmd(data.find((c) => c.cliente === parseInt(idUser)));
        });
        console.log(idUser);
        if (cmd != undefined) {
            const data = {
                id: parseInt(pedidoId),
                status: 1,
                operacao: 4,
            };
            socket.emit('modificar_status_comanda', data);


        } else {
            const data = {
                id: 401,
                status: 1,
                atendente: 'delivery',
                operacao: 4,
                cliente: idUser
            };

            socket.emit('modificar_status_comanda_nova', data);


        }


        socket.on('disconnect', () => {
            // Implemente a lógica para lidar com a desconexão do cliente, se necessário
        });

        socket.on('connect', () => {
            // Implemente a lógica para lidar com a reconexão do cliente, se necessário
        });

        return () => {
            socket.off('comandas');
            socket.off('disconnect');
            socket.off('connect');
        };
    }, []);

    const handleEmitStatus = (idMesa,) => {

        const data = {
            id: parseInt(sessionStorage.getItem('pedidoIdUsuario')),
            status: 4,
            operacao: 4,
        };

        socket.emit('modificar_status_comanda', data);


    };

};
export default SocketPage;