import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io('http://192.168.0.50:8000');

const SocketPage = () => {

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
        console.log(sessionStorage.getItem('pedidoIdUsuario'));

        socket.on('comandas', (data) => {

            const comanda = data.find((c) => c.chave === parseInt(sessionStorage.getItem('pedidoIdUsuario')));
            console.log(sessionStorage.getItem('autenticado'));
        });

        if (sessionStorage.getItem('autenticado')) {
            const data = {
                id: parseInt(sessionStorage.getItem('pedidoIdUsuario')),
                status: 1,
                operacao: 4,
            };
            socket.emit('modificar_status_comanda', data);
        } else {
            const data = {
                id: parseInt(sessionStorage.getItem('pedidoIdUsuario')),
                status: 3,
                operacao: 4,
            };
            socket.emit('modificar_status_comanda', data);
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
    }, [sessionStorage.getItem('autenticado')]);

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