import React, { useState } from "react";

import $ from 'jquery';

function Register() {
    const [usuario, setUsuario] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTel] = useState("");
    const [psecreta, setPsecret] = useState("");
    const [rsecreta, setRsecret] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister() {
        $.ajax({
            url: "http://https://dagesico.pythonanywhere.com/registro",
            type: "POST",
            data: {
                usuario: usuario,
                nome: nome,
                email: email,
                telefone: telefone,
                psecreta: psecreta,
                rsecreta: rsecreta,
                password: password,
            },
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                required />
            <input
                type="text"
                placeholder="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required />
            <input
                type="text"
                placeholder="Telefone."
                value={telefone}
                onChange={(event) => setTel(event.target.value)}
                required />

            <input
                type="text"
                placeholder="Pergunta Secreta"
                value={psecreta}
                onChange={(event) => setPsecret(event.target.value)}
                required />
            <input
                type="text"
                placeholder="Resposta Secreta"
                value={rsecreta}
                onChange={(event) => setRsecret(event.target.value)}
                required />
            <input
                type="password"
                placeholder="Senha"

                required />

            <input
                type="password"
                placeholder="Confirme a senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;