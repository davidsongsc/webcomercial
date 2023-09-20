import React from "react";

const Painel = ({ autenticado,
    handleLogout }) => {
    if (autenticado) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                top: '130px'
            }}>
                <table>
                    <thead>
                        <td>
                            <th>Usuario</th>
                        </td>
                        <td>
                            <th>pedido</th>
                        </td>
                        <td>
                            <th>...</th>
                        </td>
                    </thead>
                    <tbody>
                        <td>
                            <tr>{sessionStorage.getItem('usuario')}</tr>
                        </td>
                        <td>
                            <tr>{sessionStorage.getItem('pedidoIdUsuario')}</tr>
                        </td>
                        <td>
                            <tr><button onClick={handleLogout}>Logout</button></tr>
                        </td>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Painel;