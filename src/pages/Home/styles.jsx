import styled from "styled-components";
import { MapPin } from "phosphor-react";

export const Container = styled.main`
  height: calc(100vh - 120px);
`;

export const FullWithPicker = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme["primary-light"]};
`;

export const InputsArea = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 30px;
  background-color: ${(props) => props.theme["primary-dark"]};
  margin: 0 auto;
  gap: 10px;
  display: flex;
`;

export const InputSpace = styled.div`
  width: 65%;
  position: relative;
`;

export const InputCidade = styled.input`
  width: 100%;
  height: 36px;
  padding: 20px;
  border-radius: 4px;
  border: none;
`;

export const DatePickerArea = styled.div``;

export const InputDate = styled.input`
  width: 100%;
  height: 36px;
  padding: 20px;
  border-radius: 4px;
  border: none;
`;

export const IconPin = styled(MapPin).attrs({
  size: 25,
  color: "black",
})`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 65%;
  right: 15px;
  transform: translateY(-50%);
`;

export const Label = styled.label`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${(props) => props.theme["white"]};
`;

export const GroupCarArea = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GroupCarTitle = styled.h1`
  font-size: 1.9rem;
  font-weight: 900;
  text-align: center;
  margin-top: 25px;

  color: ${(props) => props.theme["primary-dark"]};
`;

export const GropCarSubTitle = styled.p`
  font-weight: 200;
  text-align: center;
  margin: 5px;
  color: ${(props) => props.theme["primary-dark"]};
`;

export const GroupCarGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const MoreGroupCar = styled.button`
  font-weight: 200;

  padding: 8px 26px;
  border-radius: 5px;
  border: ${(props) =>
    props.$outline
      ? `1px solid ${props.theme["primary-dark"]}`
      : props.theme["primary-dark"]};
  background-color: ${(props) =>
    props.$outline ? "transparent" : props.theme["primary-dark"]};
  transition: all 0.5s;

  color: ${(props) =>
    props.$outline ? props.theme["primary-dark"] : props.theme["white"]};

  &:hover {
    background-color: ${(props) =>
      props.$outline
        ? props.theme["primary-light"]
        : props.theme["primary-light"]};
    border: ${(props) =>
      props.$outline
        ? `1px solid ${props.theme["primary-light"]}`
        : props.theme["primary-dark"]};
    color: ${(props) =>
      props.$outline ? props.theme["white"] : props.theme["white"]};
    cursor: pointer;
  }
`;
