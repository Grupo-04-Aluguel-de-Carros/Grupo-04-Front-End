import styled from "styled-components";

export const FullWidh = styled.nav`
  width: 100%;

  background-color: ${(props) => props.theme["purple3"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 4px;
  margin: 0 auto;
  z-index: 99;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 20px;
  }
`;

export const AgencyArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const AgencyUnitis = styled.div`
  width: 100%;
  margin-top: 45px;
  
  display: flex;
  justify-content: space-between;
    align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AgencyUnit = styled.div`
  max-width: 350px;
  padding: 20px;
  margin: 0 10px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray300"]};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 450px;
  }
`;

export const AgencyTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AgencySubTitle = styled.h2`
color: ${(props) => props.theme["purple5"]};

font-weight: 900;
font-size: 1.5rem;

margin-bottom: 5px;
margin: 0 auto;
`;

export const AgencyAdress = styled.span`
color: ${(props) => props.theme["purple5"]};

font-size: .9rem;
font-weight: 100;
line-height: 1.2;

margin-bottom: 10px;
`;
