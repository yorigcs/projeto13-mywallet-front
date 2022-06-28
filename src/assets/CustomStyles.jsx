import styled from "styled-components";

const Form = styled.form`
 display: flex;
 flex-direction: column;
 width: 100%;
 gap: 12px;
`
const Input = styled.input`
    background-color: white;
    border-radius: 5px;
    width: 100%;
    height: 58px;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    background-color: #A328D6;
    color: white;
    
`
export { Form, Input, Button };