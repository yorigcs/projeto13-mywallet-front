import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../Contexts/auth";
import AppName from "../Shared/AppName";
import { Form, Input, Button, ErrorStyle } from "../assets/CustomStyles"
import HandleButton from "../Shared/HandleButton"
import axiosI from "../services/axios";

const LogIn = () => {
    const { setUserInfo } = useAuth();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    useEffect(() => {console.log(loginData)},[loginData])
    // button states
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    //errors fields
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    //error from api
    const [apiError, setApiError] = useState(null);

    const isValid = () => {
        let isValid = true;

        setEmailError(null);
        setPasswordError(null);

        if (loginData.email.length === 0) {
            setEmailError("Este campo não pode estar em branco.");
            isValid = false;
        }

        if (loginData.password.length === 0) {
            setPasswordError("Este campo não pode estar em branco.");
            isValid = false;
        }
        return isValid;
    }

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    async function HandleLogIn() {
        if (!isValid()) return;
        setLoading(true)
        try {
            const res = await axiosI.post("/signIn",loginData)
            console.log(res)
            setLoading(false)
            setSucess(true);
            setUserInfo(res.data.user)
        } catch (err) {
            console.log(err.response);
            setLoading(false)
            setError(true);
            setApiError(err.response.data)

            setTimeout(()=> {
                setError(false)
                setApiError(null)
            }, 2500)
        }
    }

    return (
        <Container>
            <AppName>MyWallet</AppName>
            <Form >
                <Input name="email" type="email" placeholder="E-mail" onChange={handleChange} value={loginData.email} />
                {emailError ? <ErrorStyle>{emailError}</ErrorStyle> : null}
                <Input name="password" type="password" placeholder="Senha" onChange={handleChange} value={loginData.password} />
                {passwordError ? <ErrorStyle>{passwordError}</ErrorStyle> : null}
                <Button type="button" onClick={HandleLogIn}>
                    {HandleButton(loading, sucess, error, "Entrar")}
                </Button>
                {apiError ? <ErrorStyle>{apiError}</ErrorStyle> : null}
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