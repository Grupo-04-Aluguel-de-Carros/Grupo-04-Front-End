import styled from "styled-components";

export const SliderCardArea = styled.div`
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 10px;

padding: 200px;

background-repeat: no-repeat;
background-size: cover;
opacity: .9;
`


export const SliderCardTitle = styled.h1`
    font-size: 2.5rem;
`

export const SliderCardDescription = styled.p`
    font-size: .9rem;
    font-weight: bold;
    text-align: left;

    font-weight: 100;


    width: 65%;
`
export const BtnArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`