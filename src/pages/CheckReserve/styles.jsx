import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;


  flex-direction: column;


  @media (max-width: 768px) {
    justify-content: ${(props) => (props.$cnt01 ? "space-around" : "")};
  }
`;

export const Title = styled.h1`
margin-bottom: -150px;
`
