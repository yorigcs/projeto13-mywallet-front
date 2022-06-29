import styled from "styled-components";
import { useAuth } from "../Contexts/auth";
import { BiExit } from 'react-icons/bi';
const Home = () => {
    const { userInfo } = useAuth();
    return (
        <TopHeader>
            <h1>Olá, {userInfo.name}</h1>
            <BiExit style={{height: "30px", width: "30px", color: "white"}} />
        </TopHeader>
    )
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
export default Home;