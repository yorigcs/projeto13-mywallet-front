import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Contexts/auth";
import axiosI from "../services/axios";
import { BiExit } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const Home = () => {
    let navigate = useNavigate();
    const { userInfo } = useAuth();
    const [registerLog,setRegisterLog] = useState(null);

   
    
    return (
        <>
            <TopHeader>
                <h1>Olá, {userInfo.name}</h1>
                <BiExit style={{ height: "30px", width: "30px", color: "white" }} />
            </TopHeader>

            <RegisterLog>
                
            </RegisterLog>

            <Footer>
                <ButtonScreen onClick={() => navigate("../NewInput", { replace: true })}>
                    <AiOutlinePlusCircle style={{ height: "30px", width: "30px", color: "white" }} />
                    <p>Nova entrada</p>
                </ButtonScreen>

                <ButtonScreen onClick={() => navigate("../NewOutPut", { replace: true })}>
                    <AiOutlineMinusCircle style={{ height: "30px", width: "30px", color: "white" }} />
                    <p>Nova saída</p>
                </ButtonScreen>
            </Footer>
        </>

    )
}

const HandleLog = () => {

}
const TopHeader = styled.header`
    display:flex;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        font-weight: 700;
        color: white
    }
`
const RegisterLog = styled.main`
    margin: 20px 0;
    background-color: white;
    border-radius: 5px;
    width: 100%;
    min-height: 70vh;
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`
const ButtonScreen = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 114px;
    width: 48%;
    position: relative;
    background-color: #A328D6;
    border-radius: 5px;
    p {
        width: 30%;
        color: white;
        font-weight: 700;
    }
`
export default Home;