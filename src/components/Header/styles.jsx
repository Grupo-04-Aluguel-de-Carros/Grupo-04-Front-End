import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Gear } from "phosphor-react";

import logo from "../../assets/DDRental.png";

export const FullWidh = styled.nav`
  width: 100%;
  padding: 10px;
  /* background-color: ${(props) => props.theme["bg1"]}; */
  background: rgba(9,9,9, 0.1);

  /* position: absolute; */

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -5px 15px ${(props) => props.theme["gray800"]};
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 150px;
  height: 43px;
`;

export const LoginArea = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const BtnArea = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AdmPainelArea = styled.button`

  background-color: transparent;
  color: ${(props) => props.theme["gray100"]};
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  
  transition: all .5s;


&:hover{
  cursor: pointer;
  color: ${(props) => props.theme["purple1"]};

}
`;


export const GearIcon = styled(Gear).attrs({
  size: 35,
})`
  color: ${(props) => props.theme["gray400"]};
`;

export const DropDownTrigger = styled(DropdownMenu.Trigger)`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["purple1"]};
  outline: none;

  color: ${(props) => props.theme["purple5"]};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DropDownContent = styled(DropdownMenu.Content)`
  padding: 8px 16px;
  color: ${(props) => props.theme["purple5"]};

  outline: none;
  background: ${(props) => props.theme["gray100"]};

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const DropdownItem = styled(DropdownMenu.Item)`
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DropdownSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  margin: 5px;
`;

export const FirstLetter = styled.p`
  font-size: 1.3rem;
  width: 40px;
  height: 40px;
  padding: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(props) => props.theme["purple1"]};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WelcomeUser = styled.p`
  color: ${(props) => props.theme["gray100"]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoutUser = styled.a`
  text-decoration: none;
  margin-top: 2px;
  cursor: pointer;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
