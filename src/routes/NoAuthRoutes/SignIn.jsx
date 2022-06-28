import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppName from "../../Shared/AppName";
import { Form, Input, Button } from "../../assets/CustomStyles"


const SignIn = () => {
    const [signInData, setSignInData] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmPw: "",
        }
    );
    const handleChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }
    useEffect(() => { console.log(signInData) }, [signInData])
    return (
        <Container>
            <AppName>MyWallet</AppName>
            <Form >
            <Input name="name" type="text" placeholder="Nome" required onChange={handleChange} value={signInData.name} />
                <Input name="email" type="email" placeholder="E-mail" required onChange={handleChange} value={signInData.email} />
                <Input name="password" type="password" placeholder="Senha" required onChange={handleChange} value={signInData.password} />
                <Input name="confirmPassword" type="password" placeholder="Confirme a senha" required onChange={handleChange} value={signInData.confirmPw} />
                <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="/">Já tem uma conta? Entre agora!</Link>
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
export default SignIn;