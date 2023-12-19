import { useAuth } from "../../hooks/useAuth.jsx";

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
  AdmPainelArea,
  GearIcon
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
  const navigate = useNavigate();
  const { user,  signOut } = useAuth();

  const location = useLocation();

  function handleSignOut() {
    signOut();
  }

  const handleInitials = () => {
    const fullName = user.name + " " + user.surname;
    const partsName = fullName.split(" ");
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
                      {user.name} {user.surname}
                    </DropdownItem>

                    <DropdownSeparator />

                    <DropdownItem
                      onClick={() => {
                        toast.error("Você saiu da aplicação");
                        handleSignOut();
                      }}
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
                Olá {user.name} {user.surname}
                <LogoutUser onClick={() => handleSignOut()}>Sair</LogoutUser>
              </WelcomeUser>

              {user.role === 'ADMIN' ? (
              <>
              <AdmPainelArea onClick={() => navigate('/admin')}>
              <GearIcon />
                 Painel Administrativo
              </AdmPainelArea>
              
              </>
            ) : (
              <></>
            )}
              
            </>
          ) : (
            <BtnArea>
              {location.pathname === "/signin" ? (
                <>
                  <CustomButton
                    name="Cadastrar"
                    onClick={() => navigate("/signup")}
                  />
                </>
              ) : location.pathname === "/signup" ? (
                <>
                  <CustomButton
                    name="Entrar"
                    onClick={() => navigate("/signin")}
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

                  

          
                </BtnArea>
              )}
            </BtnArea>
          )}
        </LoginArea>
      </Container>
    </FullWidh>
  );
}
