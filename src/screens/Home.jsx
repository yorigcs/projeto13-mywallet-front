import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Contexts/auth";
import axiosI from "../services/axios";
import { BiExit } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
    let navigate = useNavigate();
    const { userInfo, setUserInfo } = useAuth();
    const [registerLog, setRegisterLog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [myBalance, setMyBalance] = useState(0);

    useEffect(() => {
        setLoading(true)
        axiosI.get(`/balanceLogs/${userInfo.email}`)
            .then((res) => {
                setRegisterLog(res.data);
                setLoading(false);
                setMyBalance(getBalance())
            })
            .catch((err) => {
                setLoading(false);
                handleSignOut();
            });
    }, [])

    function handleSignOut() {
        localStorage.removeItem("MWAuthUser")
        localStorage.removeItem("MWAuthToken")
        setUserInfo(null);
    }

    function getBalance() {
        let allIn = 0;
        let allOut = 0;
        const allInRegister = 
        registerLog.filter((register) => register.type === "Input");
        allInRegister.forEach((register) => {allIn += parseInt(register.value)})
        const allOutRegister = 
        registerLog.filter((register) => register.type === "Output");
        allOutRegister.forEach((register) => {allOut += parseInt(register.value)})

        return allIn - allOut;
    }   

    return (
        <>
            <TopHeader>
                <h1>Olá, {userInfo.name}</h1>
                <BiExit onClick={handleSignOut} style={{ height: "30px", width: "30px", color: "white", cursor: "pointer" }} />
            </TopHeader>

            <ContainerRegister>
                {loading
                    ?
                    <RegisterLog align="center" justify="center">
                        <ThreeDots color="#00BFFF" height={60} width={60} />
                    </RegisterLog>
                    :
                    <RegisterLog align="space-between" justify="flex-start">
                        {registerLog.map(register => <HandleLog key={register._id} {...register} />)}
                    </RegisterLog>
                }
                <Balance color={myBalance >= 0 ? "#03AC00" : "#C70000"}>
                    <p>Saldo:</p>
                    <p>{Math.abs(myBalance)}</p>
                </Balance>
            </ContainerRegister>



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

const HandleLog = ({ _id, date, type, value, description }) => {
    return (
        <Registered id={_id} >
            <div>
                <RegisterDate>{date}</RegisterDate>
                <RegisterDescription>{description}</RegisterDescription>
            </div>
            <RegisterValue
                color={type === "Input" ? "#03AC00" : "#C70000"}>
                {value}
            </RegisterValue>
        </Registered>
    )
}
const TopHeader = styled.header`
    display:flex;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        font-weight: 700;
        color: white;
    }
`
const ContainerRegister = styled.main`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin: 20px 0;
    background-color: white;
    border-radius: 5px;
    width: 100%;
    min-height: 70vh;
`

const RegisterLog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    height: 60vh;
    overflow-y: scroll;
    
`

const Registered = styled.div`
    margin-bottom: 15px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    div {
        display: flex;
        gap: 10px;
    }
`
const RegisterDate = styled.div`
    color: #C6C6C6;
`
const RegisterDescription = styled.div`
    color: black;
`
const RegisterValue = styled.div`
 color: ${props => props.color}
`

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    p:nth-child(2) {
        color: ${props => props.color}
    }
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