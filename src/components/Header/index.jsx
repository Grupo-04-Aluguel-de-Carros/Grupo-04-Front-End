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
              <FirstLetter>{user.nome.charAt(0).toUpperCase()}</FirstLetter>
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
