import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 100px;
`

export const TitlePage = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme["primary-dark"]};
`

export const Form = styled.form`
    width: 450px;
    padding: 22px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;  
`

export const Label = styled.label`
    font-size: 1.1rem;
    font-weight: 800;
    color: ${(props) => props.theme["gray-600"]};
    margin-left: 10px;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    text-align: left;
    padding: 16px;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme["gray-300"]};
    background: transparent;

    &:focus{
     outline: none;
     border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
    }

`

export const ErrorP = styled.p`
    font-size: 0.7rem;
    color: ${(props) => props.theme["red-300"]};
`;

export const SubmitBtn = styled.button`
    width: 100%;
    height: 50px;


    color: ${(props) => props.theme["gray-600"]};
    background-color: ${(props) => props.theme["red-300"]};
    border: none;
    border-radius: 4px;
`

export const DontHaveAccount = styled.p`
    text-align: center;
    margin-top: 25px;
    color: ${(props) => props.theme["gray-600"]}
`
