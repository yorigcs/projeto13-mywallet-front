import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

            <Link to="SignUp">Primeira vez? Cadastre-se</Link>
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
    margin-top: 36px;
    color: white;
    font-weight: 700;
 }
`
export default LogIn;