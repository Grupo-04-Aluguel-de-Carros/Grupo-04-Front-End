import styled from "styled-components";

import imgbkg from "../../assets/imgBk.jpeg";

export const FullWithPicker = styled.div`
  width: 100%;
  /* height: 400px; */
  background: url(${imgbkg}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.main`
  height: calc(100vh - 120px);
`;


export const AreaDate = styled.div`
  height: 110px;
  padding: 16px;

  border-radius: 12px;

  background: linear-gradient(to right top, #fafafa, #fafafa);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  margin-top: -50px;
  z-index: 1;
`; 

export const AreaDateLimit = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const LabelDate = styled.label`
  font-size: 1.2rem;
  color: blue;
`;

export const SelectDate = styled.select`
  width: 450px;
  height: 20px;

  border: none;
  background-color: blue;
`;