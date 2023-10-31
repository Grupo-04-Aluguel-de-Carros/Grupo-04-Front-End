import styled from "styled-components";
import logo from '../../assets/dh_rentcarLogo.png';

export const FullWidh = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -5px 15px ${(props) => props.theme['primary-light']};

`;

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const SubTitle = styled.span`
  width: 400px;
  margin-left: 20px;

  font-size: 1.0rem;
  font-style: italic;
  font-weight: 100;
  
  color: ${(props) => props.theme['primary-light']};
`

export const Logo = styled.img.attrs({
    src: `${logo}`
})`
width: 80px;
height: 80px;
`;

export const LoginArea = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  gap: 10px;
`

export const FirstLetter = styled.p`
  font-size: 1.3rem;
  width: 50px;
  height: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  
  background-color: ${(props) => props.theme["primary-dark"]};

`

export const WelcomeUser = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme["primary-dark"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LogoutUser = styled.a`
  text-decoration: none;
  margin-top: 5px;
  cursor: pointer;
  font-size: .8rem;
`

export const LoginBtn = styled.button`
  padding: 8px 36px;
  border-radius: 5px;
  border: ${props => props.$outline ? `1px solid ${props.theme['primary-dark']}` : props.theme['primary-dark']};
  background-color: ${props => props.$outline ? 'transparent' : props.theme['primary-dark']};
  transition: all .5s;

  color: ${(props) => props.$outline ? props.theme['primary-dark'] : props.theme['white']};
  font-weight: 800;

  &:hover{
    background-color: ${(props) => props.$outline ? props.theme['gray-200'] : props.theme['primary-light']};
    border: ${props => props.$outline ? `1px solid ${props.theme['primary-light']}` : props.theme['primary-dark']};
    cursor: pointer;
  }
`