import { useState } from "react";
import {
  FullWidh,
  Container,
  LogoArea,
  Logo,
  SubTitle,
  LoginArea,
  LoginBtn,
  FirstLetter,
  WelcomeUser,
  LogoutUser,
} from "./styles.jsx";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

export function Header() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();

  const handleInitials = () => {
    const partsName = user.nome.split(' ');
    const letterFirstName = partsName[0];
    const letterLastName = partsName[partsName.length - 1];
    const nameInitials = letterFirstName.charAt(0) + letterLastName.charAt(0);
    return nameInitials;
  }

  const navigate = useNavigate();

  console.log(user);

  return (
    <FullWidh>
      <Container>
        <LogoArea onClick={() => navigate("/")}>
          <Logo />
          <SubTitle>Os melhores carros, as melhores vantagens.</SubTitle>
        </LogoArea>

        <LoginArea>
          {user ? (
            <>
              <FirstLetter>{handleInitials(user).toUpperCase()}</FirstLetter>
              {/* <FirstLetter>{user.nome.charAt(0).toUpperCase()}</FirstLetter> */}
              <WelcomeUser>Olá {user.nome}
              <LogoutUser onClick={() => toast.error("Você clicou para deslogar da plataforma")}>Sair</LogoutUser>
              </WelcomeUser>
              
            </>
          ) : (
            <>
              <LoginBtn $outline onClick={() => navigate("/signin")}>Entrar</LoginBtn>
              <LoginBtn onClick={() => navigate("/signup")}>
                Criar conta
              </LoginBtn>
            </>
          )}
        </LoginArea>
      </Container>
    </FullWidh>
  );
}
