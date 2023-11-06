import styled from "styled-components";
import logo from "../../assets/logo1.png";

export const FullWidh = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme["bg"]};
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 4px;
  margin: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 45px;
  height: 45px;
`;

export const Copy = styled.p`
  color: ${(props) => props.theme["gray100"]};

  @media (max-width: 768px){
    font-size: 0.8rem;
  }
`;

export const SocialMediaArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialMediaBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme["gray100"]};
  border: none;

  transition: all 0.5s;

  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    border-radius: 100px;
    color: ${(props) => props.theme["purple1"]};
  }
`;
