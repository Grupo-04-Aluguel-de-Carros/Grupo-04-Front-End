import styled from "styled-components";
import {
    EyeClosedIcon, EyeOpenIcon
  } from "@radix-ui/react-icons";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 100px;
`

export const TitlePage = styled.h1`
    font-size: 2.5rem;
    color: ${(props) => props.theme["gray100"]};

    @media (max-width: 768px) {
        font-size: 2.0rem;
  }
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
    color: ${(props) => props.theme["gray100"]};
    margin-left: 10px;
`

export const InputDiv = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    text-align: left;
    padding: 16px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["gray300"]};
    background: transparent;
    color: ${(props) => props.theme["gray100"]};

    &:focus{
     outline: none;
     border-bottom: 2px solid ${(props) => props.theme["purple1"]};
    }

    &::placeholder{
       font-size: 0.8rem;
       color: ${(props) => props.theme["gray100"]}
    }

`

export const InputIconOpen = styled(EyeOpenIcon)`
    position: absolute;
    top: 10px;
    right: 25px;
    color: ${(props) => props.theme["gray100"]};
    cursor: pointer;
`;

export const InputIconClose = styled(EyeClosedIcon)`
    position: absolute;
    top: 10px;
    right: 25px;
    color: ${(props) => props.theme["gray100"]};
    cursor: pointer;
`;

export const ErrorP = styled.p`
    font-size: 0.7rem;
    color: ${(props) => props.theme["error-light"]};
`;

export const DontHaveAccount = styled.p`
    text-align: center;
    margin-top: 25px;
    color: ${(props) => props.theme["gray300"]}
`
