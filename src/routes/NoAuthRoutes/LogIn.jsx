import styled from "styled-components";
import { useState, useEffect } from "react";

import AppName from "../../Shared/AppName";
import { Form, Input, Button } from "../../assets/CustomStyles"

const LogIn = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    useEffect(() => { console.log(loginData) }, [loginData])
    return (
        <Container>
            <AppName>MyWallet</AppName>
            <Form >
                <Input name="email" type="email" placeholder="E-mail" required onChange={handleChange} value={loginData.email} />
                <Input name="password" type="password" placeholder="Senha" required onChange={handleChange} value={loginData.password} />
                <Button type="submit">Entrar</Button>
            </Form>

            <a href="http://localhost">Primeira vez? Cadastre-se</a>
        </Container>
    )
}

const Container = styled.main`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 40px;
 height: 80vh;

 a {
    margin-top: 36px
 }
`
export default LogIn;