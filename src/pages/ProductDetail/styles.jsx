import styled from "styled-components";
import { MapPin, CaretLeft } from "phosphor-react";

export const FullWidh = styled.nav`
  width: 100%;
  padding: 8px;
  background: ${(props) =>
    props.$full01 ? `${props.theme["purple4"]}` : props.theme["purple3"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 5px;

  display: flex;

  justify-content: ${(props) => (props.$cnt01 ? "space-between" : "")};
  align-items: center;

  @media (max-width: 768px) {
    justify-content: ${(props) => (props.$cnt01 ? "space-around" : "")};
  }
`;

export const DivHeader = styled.div``;

export const BackButton = styled(CaretLeft)`
    cursor: pointer;
    transition: all .5s;

    &:hover {
        color: ${(props) => props.theme['gray300']};
        transform: scale(1.2);
    }
`;

export const TitleHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SubTitleHeader = styled.h1`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const DivLocation = styled.div`
  width: 70%;
`;

export const MapIcon = styled(MapPin)`
  margin-right: 10px;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
