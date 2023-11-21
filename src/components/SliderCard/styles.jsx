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

  @media (max-width: 768px) {
    padding: 60px;
  }
`;

export const SliderCardTitle = styled.h1`
  font-size: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SliderCardDescription = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;

  font-weight: 100;

  width: 65%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const BtnArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
