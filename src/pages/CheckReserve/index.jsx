import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";
import sucessAnimation from "../../assets/lottie/success.json";
import errorAnimation from "../../assets/lottie/error.json";

import { Container, Title } from "./styles";

export function CheckReserve() {
  const [statusReserve, setStatusReserve] = useState(true);

  return (
    <>
      {statusReserve ? (

          <Container>
            <Player src={sucessAnimation} className="player" loop autoplay />
            <Title>Reserva realizada com sucesso</Title>
          </Container>
  
      ) : (

        <Container>
          <Player src={errorAnimation} className="player" loop autoplay />
          <Title>Reserva realizada com sucesso</Title>
          

        </Container>
  
      )}
    </>
  );
}
