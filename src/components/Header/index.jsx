import { useState } from "react";
import {
  FullWidh,
  Container,
  LogoArea,
  Logo,
  LoginArea,
  BtnArea,
  FirstLetter,
  WelcomeUser,
  LogoutUser,
  DropDownTrigger,
  DropDownContent,
  DropdownItem,
  DropdownSeparator,
} from "./styles.jsx";
import { CustomButton } from "../Button/index.jsx";
import { useNavigate, useLocation } from "react-router-dom";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  HamburgerMenuIcon,
  ChevronRightIcon,
  PersonIcon,
  PinRightIcon,
} from "@radix-ui/react-icons";

import { toast } from "react-toastify";

export function Header() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({nome: "Mauricio Corrêa Alves"});

  const navigate = useNavigate();

  const location = useLocation();

  const handleInitials = () => {
    const partsName = user.nome.split(" ");
    const letterFirstName = partsName[0];
    const letterLastName = partsName[partsName.length - 1];
    const nameInitials = letterFirstName.charAt(0) + letterLastName.charAt(0);
    return nameInitials;
  };

  return (
    <FullWidh>
      <Container>
        <LogoArea onClick={() => navigate("/")}>
          <Logo />
        </LogoArea>

        <LoginArea>
          <DropdownMenu.Root>
            <DropDownTrigger asChild>
              <button className="IconButton" aria-label="Customise options">
                <HamburgerMenuIcon />
              </button>
            </DropDownTrigger>

            <DropdownMenu.Portal>
              <DropDownContent className="DropdownMenuContent" sideOffset={5}>
                {user ? (
                  <>
                    <DropdownItem className="DropdownMenuItem">
                      <PersonIcon />
                      {user.nome}
                    </DropdownItem>

                    <DropdownSeparator />

                    <DropdownItem
                      onClick={() => toast.error("Você saiu da aplicação")}
                    >
                      <PinRightIcon />
                      Sair
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem
                      className="DropdownMenuItem"
                      onClick={() => navigate("/signin")}
                    >
                      <PersonIcon />
                      Entrar
                    </DropdownItem>

                    <DropdownSeparator />

                    <DropdownItem onClick={() => navigate("/signup")}>
                      <ChevronRightIcon />
                      Cadastrar
                    </DropdownItem>
                  </>
                )}
              </DropDownContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {user ? (
            <>
              <FirstLetter>{handleInitials(user).toUpperCase()}</FirstLetter>
              <WelcomeUser>
                Olá {user.nome}
                <LogoutUser
                  onClick={() =>
                    toast.error("Você clicou para deslogar da plataforma")
                  }
                >
                  Sair
                </LogoutUser>
              </WelcomeUser>
            </>
          ) : (
            <BtnArea>
              {location.pathname === "/signin" ? (
                <>
                <CustomButton
                  name="Cadastrar"
                  onClick={() => navigate("/signup")}
                />

                <CustomButton
                name="Clique aqui pra acessar a rota"
                onClick={() => navigate("/produto/123123")}
              />
              </>
              ) : location.pathname === "/signup" ? (
                <>
                <CustomButton
                  name="Entrar"
                  onClick={() => navigate("/signin")}
                />


                <CustomButton
                name="Clique aqui pra acessar a rota"
                onClick={() => navigate("/produto/123123")}
              />
              </>
              ) : (
                <BtnArea>
                  <CustomButton
                    name="Entrar"
                    onClick={() => navigate("/signin")}
                  />
                  <CustomButton
                    name="Cadastrar"
                    $outline
                    onClick={() => navigate("/signup")}
                  />

<CustomButton
                name="Clique aqui pra acessar a rota"
                onClick={() => navigate("/produto/123123")}
              />
                </BtnArea>
              )}
            </BtnArea>
          )}
        </LoginArea>
      </Container>
    </FullWidh>
  );
}
