import { Form, Input, Button, ErrorStyle } from '../assets/CustomStyles'
import HandleButton from "../Shared/HandleButton"
import axiosI from "../services/axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiArrowGoBackLine } from 'react-icons/ri'
const NewInput = () => {
    let navigate = useNavigate();
    const [entry, setEntry] = useState({ value: '', description: '' });

    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    //errors fields
    const [valueError, setValueError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);

    const isValid = () => {
        let isValid = true;
        setValueError(null);
        setDescriptionError(null)

        if (isNaN(parseInt(entry.value))) {
            setValueError("Digite apenas números!");
            isValid = false;
        }

        if (entry.description.length < 3) {
            setDescriptionError("A descrição precisa ter no mínimo três carácteres");
            isValid = false;
        }

        if (entry.description.length > 100) {
            setDescriptionError("A descrição precisa ter no máximo 100 carácteres");
            isValid = false;
        }

        return isValid;
    }
    function handleChange(e) {
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }

    async function registerEntry() {
        if (!isValid()) return;

        setLoading(true);
        try {
            await axiosI.post("/signUp", signUpData)
            setLoading(false)
            setSucess(true);
        } catch (err) {
            console.log(err);
            setLoading(false)
            setError(true);
        }
    }
    return (
        <>
            <TopHeader>
                <h1>Nova Entrada</h1>
                <RiArrowGoBackLine
                    onClick={() => navigate("../", { replace: true })}
                    style={
                        {
                            height: "30px",
                            width: "30px",
                            color: "white",
                            cursor: "pointer"
                        }
                    } 
                />
            </TopHeader>
            <Form>
                <Input name="value" placeholder='Valor' onChange={handleChange} value={entry.value} />
                {valueError ? <ErrorStyle>{valueError}</ErrorStyle> : null}
                <Input name="description" placeholder='Descrição' onChange={handleChange} value={entry.description} />
                {descriptionError ? <ErrorStyle>{descriptionError}</ErrorStyle> : null}
                <Button type="Button" onClick={registerEntry}>
                    {HandleButton(loading, sucess, error, "Salvar entrada")}
                </Button>
            </Form>
        </>

    )
}

const TopHeader = styled.header`
    margin-bottom: 20px;
    display:flex;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        font-weight: 700;
        color: white
    }
`

export default NewInput;