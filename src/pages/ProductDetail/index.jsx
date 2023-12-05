import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

import {
  FullWidh,
  Container,
  MapIcon,
  BackButton,
  DivHeader,
  TitleHeader,
  SubTitleHeader,
  DivLocation,
  DivDescription,
  Title,
  SubTitle,
  DivFeaturesArea,
  DivFeaturesIcons,
  IconArea,
  IconTitle,
  IconFeature,
  DivPolicyArea,
  DivPolicyContainer,
  DivPolicyUnit,
  DivPolicyTitle,
  DivDateArea,
  DivDateCalendar,
  DivBtnCalendar,
  CalendarText,
} from "./styles";

import { Gallery } from "../../components/Gallery";
import { CustomButton } from "../../components/Button";

export function ProductDetail() {
  useEffect(() => {
    const media = window.matchMedia("(min-width: 545px)");

    if (media.matches) {
      setNumberMonths(2);
    } else {
      setNumberMonths(1);
    }

    media.onchange = (event) => {
      if (event.matches) {
        setNumberMonths(2);
      } else {
        setNumberMonths(1);
      }
    };
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [numberMonths, setNumberMonths] = useState();

  const navigate = useNavigate();

  return (
    <>
      <FullWidh $full01>
        <Container $cnt01>
          <DivHeader>
            <SubTitleHeader>Gramado / RS</SubTitleHeader>
            <TitleHeader>Porshe 911 - BiTurbo</TitleHeader>
          </DivHeader>
          <BackButton size={30} onClick={() => navigate("/")} />
        </Container>
      </FullWidh>

      <FullWidh $full02>
        <Container>
          <MapIcon size={30}></MapIcon>

          <DivLocation>
            <SubTitleHeader>
              Av. das Hortênsias, 4635 - Estrada Gramado, Gramado - RS,
              95670-000
            </SubTitleHeader>
          </DivLocation>
        </Container>
      </FullWidh>

      <Gallery />

      <Container>
        <DivDescription>
          <Title $linePurple>Descrição</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
            ipsam dolores necessitatibus deleniti nisi voluptate alias maxime
            voluptas enim, quasi eaque, modi earum minus ab recusandae odio,
            doloremque tempora .Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint quos ipsam dolores necessitatibus deleniti
            nisi voluptate alias maxime voluptas enim, quasi eaque, modi earum
            minus ab recusandae odio, doloremque tempora Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sint quos ipsam dolores
            necessitatibus deleniti nisi voluptate alias maxime voluptas enim,
            quasi eaque, modi earum minus ab recusandae odio, doloremque tempora
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
            ipsam dolores necessitatibus deleniti nisi voluptate alias maxime
            voluptas enim, quasi eaque, modi earum minus ab recusandae odio,
            doloremque tempora Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint quos ipsam dolores necessitatibus deleniti
            nisi voluptate alias maxime voluptas enim, quasi eaque, modi earum
            minus ab recusandae odio, doloremque tempora .Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sint quos ipsam dolores
            necessitatibus deleniti nisi voluptate alias maxime voluptas enim,
            quasi eaque, modi earum minus ab recusandae odio, doloremque tempora
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
            ipsam dolores.
          </SubTitle>
        </DivDescription>
      </Container>

      <Container>
        <DivFeaturesArea>
          <Title $linePurple>Características</Title>

          <DivFeaturesIcons>
            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>

            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>
            <IconArea>
              <IconFeature />
              <IconTitle>Ar Condicionado</IconTitle>
            </IconArea>
          </DivFeaturesIcons>
        </DivFeaturesArea>
      </Container>

      <Container>
        <DivPolicyArea>
          <Title $linePurple>Politíca de cancelamento</Title>

          <DivPolicyContainer>
            <DivPolicyUnit>
              <DivPolicyTitle>Regras do aluguel</DivPolicyTitle>
              <DivPolicyUnit>
                <SubTitle>• Retirada do carro a partir das 09:00 hrs</SubTitle>
                <SubTitle>• Entrega do carro até 19:00 hrs</SubTitle>
              </DivPolicyUnit>
            </DivPolicyUnit>

            <DivPolicyUnit>
              <DivPolicyTitle>Responsabilidades</DivPolicyTitle>
              <DivPolicyUnit>
                <SubTitle>
                  • Responsabilidade do carro por conta do condutor(a).
                </SubTitle>
                <SubTitle>• Carro precisa estar com tanque cheio.</SubTitle>
                <SubTitle>
                  • Pagamento do seguro a parte do valor do aluguel.
                </SubTitle>
              </DivPolicyUnit>
            </DivPolicyUnit>

            <DivPolicyUnit>
              <DivPolicyTitle>Políticas</DivPolicyTitle>

              <DivPolicyUnit>
                <SubTitle>
                  • Todos os cancelamentos poderão ser realizado sem custos em
                  até 72hrs antes da data reservada.
                </SubTitle>
              </DivPolicyUnit>
            </DivPolicyUnit>
          </DivPolicyContainer>
        </DivPolicyArea>
      </Container>

      <Container>
        <DivDateArea>
          <Title>Datas disponíveis</Title>
          <DivDateCalendar>
            <DatePicker
              locale={ptBR}
              selected={startDate}
              minDate={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={numberMonths}
              inline
            />
            <DivBtnCalendar>
              <CalendarText>
                Adicione as datas da sua viagem para obter os preços.
              </CalendarText>
              <CustomButton name="Iniciar reservar" onClick={() => navigate("/booking/123")} />
            </DivBtnCalendar>
          </DivDateCalendar>
        </DivDateArea>
      </Container>
    </>
  );
}
