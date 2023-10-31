import styled from "styled-components";
import logo from "../../assets/logo1.png";

export const FullWidh = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 5px 15px ${(props) => props.theme['primary-light']};

`;

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 5px;
  margin: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 65px;
  height: 65px;
`;

export const Copy = styled.p`
  color: ${(props) => props.theme["primary-dark"]};
`;

export const SocialMediaArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialMediaBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme["primary-dark"]};
  border: none;

  transition: all 0.5s;

  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    border-radius: 100px;
    color: ${(props) => props.theme["primary-light"]};
  }
`;
