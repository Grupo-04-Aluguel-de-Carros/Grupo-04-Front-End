import styled from "styled-components";
import { Pencil, Trash, XCircle } from "phosphor-react";


export const Container = styled.div`
    width: 100%;

    background-color: ${(props) => props.theme['bg1']};
    margin: 0 10px;
`

export const Table = styled.table`

background-color: transparent;

width: 100%;
text-align: center;
padding: 10px;
`;

export const TableHead = styled.thead`

width: 100%;


`;

export const TableTr = styled.tr`

`;

export const TableBody = styled.tbody`
`;

export const TableTh = styled.th`
`;

export const TableTd = styled.td`
    border: 1px solid ${(props) => props.theme["purple1"]};
    padding: 10px;
`;

export const TableButton = styled.button`
  font-weight: 900;
  margin: 0 6px;

  padding: 6px;
  border-radius: 4px;
  border: ${props => props.$outline ? `1.5px solid ${props.theme['gray300']}` : props.theme['purple4']};
  background: ${props => props.$outline ? `transparent` : `${props.theme['gray100']}`};
  transition: all .3s;

  color: ${(props) => props.$outline ? props.theme['gray300'] : props.theme['purple3']};

  &:hover{
    cursor: pointer;
    color: ${(props) => props.theme["purple1"]
  }
  }
`;

export const EditIconTable = styled(Pencil).attrs({
    size: 20,
  })`

  `;

export const DeleteIconTable = styled(Trash).attrs({
    size: 20,
  })`

  `;

  export const CarModalBg = styled.div`
    width: 100%;
    height: 100%;


    background-color: #2b2626ab;

    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  `;   
  
export const CarModalInfosBg = styled.div`
    background-color: ${(props) => props.theme["gray100"]};

    width: 35%;


    padding: 20px;

    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;


    @media (max-height: 600px) {
        font-size: .6rem;
  }
`;

export const CardModalHead = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;
`; 

export const CarModalClose = styled(XCircle).attrs({
    size: 30,
  })`

        color: ${(props) => props.theme["gray900"]};

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
  `;

export const CarModalInfosInputs = styled.form`
width: 100%;

margin-top: 10px;
outline: none;

&:focus {
    outline: none;
  }

`;

export const CarModalLabel = styled.label`
    font-size: .7rem;
    color: ${(props) => props.theme["purple1"]};
`;

export const CarModalInput = styled.input`
width: 100%;
margin-bottom: 10px;

border: none;
padding: 8px;
`;

export const CardInfosBtn = styled.button`
    margin: 0 auto;
    margin-top: 10px;

    color: ${(props) => props.theme["gray100"]};
    
    font-size: 1.1rem;
    font-weight: 900;
    

    border: none;
    border-radius: 8px;

    padding: 8px 24px;
    background-color: ${(props) => props.theme["purple3"]};

    &:hover{
        background-color: red;
        cursor: pointer;
    }
`;

export const FormCreateCarSelect = styled.select`
  width: 100%;
margin-bottom: 10px;

border: none;
padding: 8px;
`;