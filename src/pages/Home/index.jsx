import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { Calendar } from "phosphor-react";

import { api } from "../../services/api";

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
  AgencyBadge
} from "./styles";

import { FullWidh } from "../../components/Agencys/styles";

export function Home() {
  const [cars, setCars] =
    useState();
    // [
    //   {
    //     id: "1111-1111-1111",
    //     name: "Porshe",
    //     price: 3000 ,
    //     src: "https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg",
    //     describe:
    //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    //   },
    //   {
    //     id: "333-333-333",
    //     name: "Camaro",
    //     price: 1500 ,
    //     src: "https://media.istockphoto.com/id/1273520124/pt/foto/tomsk-russia-chevrolet-camaro-zl1-the-exorcist-street-drift.jpg?s=612x612&w=0&k=20&c=qg2goRuPMIg9MnUtNfR-zEOckxPrwKT4kdbRZT-dNiw=",
    //     describe:
    //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    //   },
    //   {
    //     id: "444-444-444",
    //     name: "Lamborghini",
    //     price: 5000 ,
    //     src: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/02/Lamborghini-Autentica-1-1.webp",
    //     describe:
    //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quasi id. Nemo, deserunt, sit perspiciatis quas repudiandae aut nam labore ullam mollitia numquam consequuntur, amet voluptatum. Nulla ad mollitia quidem?",
    //   },
    // ]
  const [agency, setAgency] = useState();

  const [imageCar, setImageCar] = useState();

  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState();

  const navigate = useNavigate();

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

  async function getAgency() {
    try {
      const response = await api.get("/store");
      setAgency(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCars() {
    try {
      const response = await api.get("/car");
      console.log(response.data.data);
      setCars(response.data.data);

      const responseImagesCar = await api.get('/image')
      console.log(responseImagesCar.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAgency();
    getCars();
  }, []);
  return (
    <>
      <FullWidh>
        <BannerArea>
          <Container>
            <BannerTitle>Venha realizar seu sonho</BannerTitle>
            <BannerSubTitle>
              Aqui você encontra conforto e segurança para você conseguir
              realizar seus sonhos e dirigir verdadeiras máquinas a ótimo custo
              benefício.
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
          {cars ? (
            cars.map((item) => (
              <>
                <CardCar>
                  <CardCarDescribeArea>
                    <CardCarImg src="https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/09/28083401/Ferrari-F8-Tributo-cim-1160x585.jpg" />
                    <CardCarTitle>{item.name}</CardCarTitle>
                    <SubTitle>{item.description}</SubTitle>
                    <CardPrice>R$ {item.value},00/dia</CardPrice>
                    <AreaReservaButton onClick={() => navigate(`/produto/${item.id}`)}>
                      Ver Detalhes
                    </AreaReservaButton>
                  </CardCarDescribeArea>
                </CardCar>
              </>
            ))
          ) : (
            <></>
          )}
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
