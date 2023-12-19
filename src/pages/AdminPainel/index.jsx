import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { CreateAgency } from "./CreateAgency";
import { CreateCar } from "./CreateCar";
import {BookingList} from "./BookingList";

import {
  Container,
  AreaDist,
  SidebarNav,
  MenuButton,
  
} from "./styles";

import { ArrowRightIcon } from "@radix-ui/react-icons";

export function AdminPainel() {
  const { user } = useAuth();

  const [activeMenu, setActiveMenu] = useState(<CreateCar />);

  function handleMenu(status) {
    {
      (() => {
        switch (status) {
          case "car":
            return setActiveMenu(<CreateCar />);
          case "agency":
            return setActiveMenu(<CreateAgency />);
            case "booking":
            return setActiveMenu(<BookingList />);
          default:
            return console.log("nenhum");
        }
      })();
    }
  }

  return (
    <>
      {user && user.role === "ADMIN" ? (
        <>
          <Container>
            <h1> Seja bem vindo ao painel administrativo</h1>
          </Container>

          <Container>
            <AreaDist>
              <SidebarNav>
                <MenuButton onClick={() => handleMenu("car")}>
                  Gerenciar Carros
                  <ArrowRightIcon />
                </MenuButton>

                <MenuButton onClick={() => handleMenu("agency")}>
                  Gerenciar Agencias
                  <ArrowRightIcon />
                </MenuButton>
                <MenuButton onClick={() => handleMenu("booking")}>
                  Gerenciar Reservas
                  <ArrowRightIcon />
                </MenuButton>
              </SidebarNav>
              {activeMenu}
            </AreaDist>
          </Container>
        </>
      ) : (
        <>
          <h1> Ops, parece que você não pode acessar esta página</h1>
        </>
      )}
    </>
  );
}
