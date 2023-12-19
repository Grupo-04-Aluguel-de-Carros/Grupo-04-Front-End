import { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import sucessAnimation from "../../assets/lottie/success.json";
import errorAnimation from "../../assets/lottie/error.json";

import { Container, Title } from "./styles";

export function CheckReserve() {
  const [statusReserve] = useState(true);

  return (
    <>
      {statusReserve ? (

          <Container>
            <Title>Reserva realizada com sucesso</Title>
            <Player src={sucessAnimation} className="player" loop autoplay />
          </Container>
  
      ) : (

        <Container>
          <Player src={errorAnimation} className="player" loop autoplay />
          <Title>Erro ao realizar a reserva, tente novamente!</Title>
          

        </Container>
  
      )}
    </>
  );
}
