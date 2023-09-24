import React from "react";

const Painel = ({ autenticado,
    handleLogout }) => {
    if (autenticado) {
        return (
            <div className="painel-grupo-st">
                <table>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                        </tr>
                        <tr>
                            <th>pedido</th>
                        </tr>
                        <tr>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sessionStorage.getItem('usuario')}</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem('pedidoIdUsuario')}</td>
                        </tr>
                        <tr>
                            <td><button onClick={handleLogout}>Logout</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Painel;