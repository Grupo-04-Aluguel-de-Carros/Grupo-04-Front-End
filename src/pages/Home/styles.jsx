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
