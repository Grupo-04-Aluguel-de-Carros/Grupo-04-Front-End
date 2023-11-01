import styled from "styled-components";


export const CardArea = styled.div`
    width: 250px;

    margin: 30px 0;
    padding: 75px 25px;
    
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 20px;
`

export const CarImg = styled.img`
  width: 250px;
  height: 120px;

  margin-bottom: 50px;
`;

export const Title = styled.h1`
    font-size: 1.0rem;
    font-weight: bolder;
    display: inline;
    text-align: center;
    margin-bottom: 10px;
    color: ${(props) => props.theme["gray-800"]};
`

export const SubTitle = styled.p`
    font-size: .7rem;
    font-weight: 300;
    text-align: center;
    color: ${(props) => props.theme["gray-800"]};
`