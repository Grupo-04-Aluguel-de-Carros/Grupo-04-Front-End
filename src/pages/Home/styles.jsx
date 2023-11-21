import styled from "styled-components";

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

export const AreaDate = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 0 100px;

  border-radius: 12px;

  background: linear-gradient(to right top, #fafafa, #fafafa);

  display: flex;
  align-items: center;

  margin-bottom: -60px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 6px;
    padding: 0px;
    flex-direction: column;
  }
`;

export const AreaDateLimit = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const LabelDate = styled.label`
  font-size: 0.6rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray800"]};
`;

export const SelectDate = styled.select`
  width: 100%;
  padding: 6px;
`;

export const OptionDate = styled.option`
  font-size: 200px;
`;
