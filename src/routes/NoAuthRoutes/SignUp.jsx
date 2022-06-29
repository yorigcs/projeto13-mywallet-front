import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppName from "../../Shared/AppName";
import { Form, Input, Button } from "../../assets/CustomStyles"
import axiosI from "../../services/axios"
import HandleButton from "../../Shared/HandleButton"
const SignUp = () => {
    const [signUpData, setSignUpData] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmPw: "",
        }
    )
    //errors
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPwError, setConfirmPwError] = useState(null);

    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    }

    const isValid = () => {
        let isValid = true;
        setNameError(null);
        setEmailError(null);
        setPasswordError(null);
        setConfirmPwError(null);

        if (signUpData.name.length < 3 || signUpData.name.length > 12) {
            setNameError("O nome deve ter mais que três carácteres e menor que 12.");
            isValid = false;
        }

        const RegexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (!RegexEmail.test(signUpData.email)) {
            setEmailError("Digite um e-mail válido.");
            isValid = false;
        }

        if (signUpData.password.length < 4) {
            setPasswordError("A senha deve ser maior que quatro carácteres");
            isValid = false;
        }

        if (signUpData.password !== signUpData.confirmPw) {
            setPasswordError("As senhas devem ser iguais");
            setConfirmPwError("As senhas devem ser iguais");
            isValid = false;
        }

        return isValid;
    }

    const handleForm = () => {
        if (!isValid()) return;

        setLoading(true);
        axiosI.post("/signUp", signUpData)
            .then(() => {
                setLoading(false)
                setSucess(true);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                setError(true);
            })
    }

    return (
        <Container>
            <AppName>MyWallet</AppName>
            <Form >
                <Input name="name" type="text" placeholder="Nome" onChange={handleChange} value={signUpData.name} />
                {nameError ? <p>{nameError}</p> : null}
                <Input name="email" type="email" placeholder="E-mail" onChange={handleChange} value={signUpData.email} />
                {emailError ? <p>{emailError}</p> : null}
                <Input name="password" type="password" placeholder="Senha" onChange={handleChange} value={signUpData.password} />
                {passwordError ? <p>{passwordError}</p> : null}
                <Input name="confirmPw" type="password" placeholder="Confirme a senha" onChange={handleChange} value={signUpData.confirmPw} />
                {confirmPwError ? <p>{confirmPwError}</p> : null}
                <Button type="button" onClick={handleForm}>
                    {HandleButton(loading, sucess, error)}
                </Button>
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
export default SignUp;