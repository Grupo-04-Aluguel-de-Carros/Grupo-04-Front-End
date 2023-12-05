import { useState } from "react";



import "./styles.css";


import banner from "../../assets/banner1.png";

import { Calendar } from "phosphor-react";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

import {
  BannerArea,
  BannerTitle,
  BannerSubTitle,
  AreaReserva,
  AreaReservaLocalSelect,
  AreaReservaButton,
  CardCarDescribeArea,
  CardCarButton,
  AgencyUnit,
  AgencyTitle,
  SubTitle,
  AgencyArea,
  AgencyCard,
  AgencyCadTitle,
  AgencyCardDesccription,
  AgencyCardImage,
  CardButton,
  CardPrice,

  AreaCarsPromotion,
  CardCar,
  CardsCar,
  CardCarImg,
  CardCarTitle,
  AreaDateLimit,
  Container,
  LabelDate,
  SelectDate,
  OptionDate,
} from "./styles";

import { CustomButton } from "../../components/Button";

import { FullWidh } from "../../components/Agencys/styles";

export function Home() {
  const [cars, setCars] = useState([
    {
      id: "1111-1111-1111",
      name: "Porshe",
      price: 3000 ,
      src: "https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    },
    {
      id: "333-333-333",
      name: "Camaro",
      price: 1500 ,
      src: "https://media.istockphoto.com/id/1273520124/pt/foto/tomsk-russia-chevrolet-camaro-zl1-the-exorcist-street-drift.jpg?s=612x612&w=0&k=20&c=qg2goRuPMIg9MnUtNfR-zEOckxPrwKT4kdbRZT-dNiw=",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    },
    {
      id: "444-444-444",
      name: "Lamborghini",
      price: 5000 ,
      src: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/02/Lamborghini-Autentica-1-1.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    },
  ]);

  const [agency, setAgency] = useState([
    {
      id: "000-000-000",
      name: "Gramado-RS",
      img: "https://www.rbsdirect.com.br/filestore/6/8/0/6/8/6/4_b4ee2b07573f14a/4686086_ab4bc482b6a80d4.jpg?w=700",
    },
    {
      id: "111-111-111",
      name: "Rio de Janeiro-RJ",
      img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
    },
    {
      id: "333-333-333",
      name: "São Paulo-SP",
      img: "https://cognatis.com.br/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg",
    },
    {
      id: "444-444-444",
      name: "Recife-PB",
      img: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/02/melhores-praias-de-recife-pernambuco-740x415.jpg",
    },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState();

  function handleChange(event) {
    setSelected(event.target.value);
  }

  function handleForms(e) {
    e.preventDefault();

    if (selected === "") {
      alert("Escolha uma agência");
      return;
    }

    const formsData = {
      agency: selected,
      StartDateSelect: startDate,
    };

    console.log(formsData);
  }

  return (
    <>
      <FullWidh>
        <BannerArea>
          <Container>
            <BannerTitle>TESTE</BannerTitle>
            <BannerSubTitle>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas
              repudiandae aut nam labore ullam mollitia numquam consequuntur,
              amet voluptatum. Nulla ad mollitia quidem?
            </BannerSubTitle>
          </Container>
        </BannerArea>
      </FullWidh>

      <Container>
        <AreaReserva onSubmit={handleForms}>
          <AreaReservaLocalSelect>
            <option style={{ color: "red" }}>SELECIONE A AGENCIA</option>
            {agency ? (
              agency.map((data) => (
                <>
                  <option>{data.name}</option>
                </>
              ))
            ) : (
              <></>
            )}
          </AreaReservaLocalSelect>

          <DatePicker
            className="noBorder"
            dateFormat="dd/MM/yyy"
            locale={ptBR}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            icon={Calendar}
          />

          <AreaReservaButton type="submit">CONTINUAR</AreaReservaButton>
        </AreaReserva>
      </Container>

      <Container>
        <CardsCar>
          {cars ? cars.map((item) => (
            <>
            <CardCar>
              <CardCarImg src={item.src} />
              <CardCarDescribeArea>
              <CardCarTitle>{item.name}</CardCarTitle>
              <SubTitle>{item.describe}</SubTitle>
              <CardPrice>R$ {item.price},00/dia</CardPrice>
              </CardCarDescribeArea>
            </CardCar>
            </>
          )) : (<></>)}
        </CardsCar>
      </Container>

      <FullWidh>
        <Container>
          <AgencyUnit>
            <AgencyTitle>Saiba onde o seu sonho pode ser realizado</AgencyTitle>

            <AgencyUnit>
              <SubTitle>os melhores carros, nos melhores lugares</SubTitle>
            </AgencyUnit>
          </AgencyUnit>

          <AgencyArea>
            <AgencyCard>
              <AgencyCardImage
                src={
                  "https://www.rbsdirect.com.br/filestore/6/8/0/6/8/6/4_b4ee2b07573f14a/4686086_ab4bc482b6a80d4.jpg?w=700"
                }
              />
              <AgencyCadTitle>Gramado-RS</AgencyCadTitle>
              <AgencyCardDesccription>
                Cidade localizada na serra gaúcha, Gramado oferece lindas
                paisagens e um local perfeito para a realização dos seus sonhos.
              </AgencyCardDesccription>
              <CardButton>Saiba mais</CardButton>
            </AgencyCard>

            <AgencyCard>
              <AgencyCardImage
                src={
                  "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg"
                }
              />
              <AgencyCadTitle>Rio de Janeiro-RJ</AgencyCadTitle>
              <AgencyCardDesccription>
                Cidade localizada na serra gaúcha, Gramado oferece lindas
                paisagens e um local perfeito para a realização dos seus sonhos.
              </AgencyCardDesccription>
              <CardButton>Saiba mais</CardButton>
            </AgencyCard>

            <AgencyCard>
              <AgencyCardImage
                src={
                  "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/02/melhores-praias-de-recife-pernambuco-740x415.jpg"
                }
              />
              <AgencyCadTitle>Recife-PB</AgencyCadTitle>
              <AgencyCardDesccription>
                Cidade localizada na serra gaúcha, Gramado oferece lindas
                paisagens e um local perfeito para a realização dos seus sonhos.
              </AgencyCardDesccription>
              <CardButton>Saiba mais</CardButton>
            </AgencyCard>
          </AgencyArea>
        </Container>
      </FullWidh>
    </>
  );
}
