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
    font-size: .9rem;
    font-weight: 800;
    color: ${(props) => props.theme["primary-dark"]};
    margin-left: 10px;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    text-align: left;
    padding: 16px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["primary-light"]};
    background: transparent;

    &:focus{
     outline: none;
     border-bottom: 2px solid ${(props) => props.theme["primary-dark"]};
    }

`

export const ErrorP = styled.p`
    font-size: 0.7rem;
    color: ${(props) => props.theme["red-300"]};
`;

export const SubmitBtn = styled.button`
    width: 80%;
    height: 50px;

    font-size: 1.2rem;
    font-weight: 800;

    margin: 0 auto;
    margin-top: 20px;

    color: ${(props) => props.theme["primary-dark"]};
    background-color: ${(props) => props.$outline ? 'transparent' : ''};
    border: 1px solid ${(props) => props.theme['primary-light']};;
    border-radius: 4px;
    transition: all .5s;

    &:hover{
        color: ${(props) => props.theme["white"]};
        cursor: pointer;
        background-color: ${(props) => props.$outline ? props.theme["primary-dark"] : ''};
    }

    &:focus{
        outline: none;
    }
`

export const DontHaveAccount = styled.p`
    text-align: center;
    margin-top: 25px;
    color: ${(props) => props.theme["gray-600"]}
`
