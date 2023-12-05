import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../../hooks/useAuth";
import {SignIn as Login} from "../SignIn";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

import { format, formatDistance, differenceInDays } from 'date-fns';


import {
  FullWidh,
  Container,
  MapIcon,
  BackButton,
  DivHeader,
  TitleHeader,
  SubTitleHeader,
  DivLocation,
  Title,
  SubTitle,
  DivPolicyArea,
  DivPolicyContainer,
  DivPolicyUnit,
  DivPolicyTitle,
  DivDateArea,
  DivDateCalendar,
  DivSidebars,
  DivLeftSide,
  FormUser,
  FormInput,
  DivRightSide,
  TitleResume,
  SubTitleResume,
  ButtonReserve,
  GalleryMainImage,
} from "./styles";
import { useToast } from "react-toastify";

export function BookReserve() {
  const { user } = useAuth();
  const [isDisable, setIsDisable] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);    
  };

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

  useEffect(() => {
    if(!user){
      setIsDisable(true)
    }else{
      setIsDisable(false)
    }
  }, [user])

  function handleReserve(){
    if(!user){
      toast.error("Você precisa fazer o login na aplicação", {
        position: 'bottom-center'
      })
    }else{
      navigate("/checkreserve")
    }
  }
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [numberMonths, setNumberMonths] = useState();

  const startDayConverted = format(new Date(startDate), 'dd/MM/yyyy');
  const endDayConverted = format(new Date(endDate), 'dd/MM/yyyy');

  
  const QtdOfDays = formatDistance(new Date(startDate),
  new Date(endDate), { addSuffix: false, locale: ptBR,  });

  const numberOfDays = differenceInDays(new Date(endDate),
  new Date(startDate), { addSuffix: false, locale: ptBR });

  const calcRental = numberOfDays * 250;

  const navigate = useNavigate();

  return (
    <>
      <FullWidh $full01>
        <Container $cnt01>
          <DivHeader>
            <SubTitleHeader>Gramado/RS</SubTitleHeader>
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

      <Container>
        <DivSidebars>
          <DivLeftSide>
            {!user ? (
              <Login />
            ) : (
              <>
                <Title>Confira seus dados</Title>
                <FormUser>
                  <FormInput value={user ? user.name : ""}></FormInput>
                  <FormInput value={user ? user.surname : ""}></FormInput>
                  <FormInput value={user ? user.email : ""}></FormInput>
                  <FormInput value={user ? user.cpf : ""}></FormInput>
                </FormUser>
              </>
            )}

            <DivDateArea>
              <Title>Selecione suas datas desejadas</Title>
              <DivDateCalendar>
                <DatePicker
                  locale={ptBR}
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  monthsShown={2}
                  excludeDates={[new Date('12/06/2023'), new Date('12/07/2023'), new Date('12/10/2023')]}
                  selectsRange
                  inline
                  minDate={new Date('10-10-1990')}
                />
              </DivDateCalendar>
            </DivDateArea>
          </DivLeftSide>

          <DivRightSide>
            <GalleryMainImage
              $source={
                "https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg"
              }
            />
          <TitleResume>Resumo da reserva</TitleResume>
            
          <SubTitleResume>Condutor: {user ? user.name : "   ***************** "} {user ? user.surname : ""}</SubTitleResume>
          <SubTitleResume>Dia de inicio: {startDayConverted} </SubTitleResume>
          <SubTitleResume>Dia do encerramento: {endDayConverted === "31/12/1969" ? " -- / -- / --" : endDayConverted} </SubTitleResume>
          <SubTitleResume>Total de diárias: { endDayConverted === "31/12/1969" ? "-" : QtdOfDays}</SubTitleResume>
          <SubTitleResume>Valor total: R$ {endDayConverted === "31/12/1969" ? "" : `${calcRental},00`}  </SubTitleResume>
          <ButtonReserve onClick={() => handleReserve()} >{isDisable ? 'Você precisa fazer o login para reservar' : 'Reservar'}</ButtonReserve>


          </DivRightSide>

        </DivSidebars>
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
    </>
  );
}
