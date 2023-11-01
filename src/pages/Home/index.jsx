import { useState } from "react";
import {
  FullWithPicker,
  IconPin,
  InputsArea,
  InputSpace,
  InputCidade,
  InputDate,
  Label,
  DatePickerArea,
  GroupCarArea,
  GroupCarTitle,
  GropCarSubTitle,
  GroupCarGallery,
  MoreGroupCar,
} from "./styles";

import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

import { GroupCard } from "../../components/GroupCard";

import DatePicker from "react-datepicker";

export const groupCars = [
  {
    title: "GRUPO B - COMPACTO COM AR",
    image: `https://www.localiza.com/brasil-site/geral/Frota/MOBI.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    advantages: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO BE - COMPACTO ELÉTRICO",
    image: `https://www.localiza.com/brasil-site/geral/Frota/ZOEE.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO C - ECONÔMICO COM AR",
    image: `https://www.localiza.com/brasil-site/geral/Frota/SANX.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO CE - ECONÔMICO ESPECIAL C/AR",
    image: `https://www.localiza.com/brasil-site/geral/Frota/HB2X.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO CS - ECONÔMICO SEDAN C/AR",
    image: `https://www.localiza.com/brasil-site/geral/Frota/HB2C.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO F - INTERMEDIÁRIO",
    image: `https://www.localiza.com/brasil-site/geral/Frota/HB20.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO FS - INTERMEDIÁRIO SEDAN",
    image: `https://www.localiza.com/brasil-site/geral/Frota/CROX.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },

  {
    title: "GRUPO  FH - INTERMEDIÁRIO HATCH AUTOMÁTICO",
    image: `https://www.localiza.com/brasil-site/geral/Frota/YARS.png`,
    descriptionSimilar:
      "Veiculo similar a: Fiat mov, Renault Kwid 1.0, dentre outros",
    description: [
      "4 portas",
      "Ar-Condicionado",
      "Vidro Eltétrico",
      "Trava Eltétrica",
    ],
  },
];

export function Home() {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <>
      <FullWithPicker>
        <InputsArea>
          <InputSpace>
            <Label>Escolha o local da retirada do seu veículo</Label>
            <div>
              <InputCidade placeholder="Agência em que seu veículo será retirado" />
              <IconPin />
            </div>
          </InputSpace>

          <DatePickerArea>
            <Label>Retirada</Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ptBR}
              wrapperClassName="react-datepicker__year-text--holidays"
              customInput={<InputDate />}
              placeholderText="Dia retirada"
              isClearable={true}
              startDate={startDate}
              showTimeSelect
              timeFormat="p"
              timeIntervals={30}
              dateFormat="Pp"
            />
          </DatePickerArea>

          <DatePickerArea>
            <Label>Devolução</Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ptBR}
              wrapperClassName="react-datepicker__year-text--holidays"
              customInput={<InputDate />}
              placeholderText="Dia devolução"
              isClearable={true}
              startDate={startDate}
              showTimeSelect
              timeFormat="p"
              timeIntervals={15}
              dateFormat="Pp"
            />
          </DatePickerArea>
        </InputsArea>
      </FullWithPicker>

      <GroupCarArea>
        <GroupCarTitle>Conheça nossa frota</GroupCarTitle>
        <GropCarSubTitle>
          Os melhores carros do mercado para você aproveitar
        </GropCarSubTitle>

        <GroupCarGallery>
          <GroupCard data={groupCars[0]} />
          <GroupCard data={groupCars[1]} />
          <GroupCard data={groupCars[2]} />
          <GroupCard data={groupCars[3]} />
        </GroupCarGallery>

        <MoreGroupCar onClick={() => toast("Redirecionar para página com todas as categorias")} $outline>Conhecer toda a frota</MoreGroupCar>
      </GroupCarArea>
    </>
  );
}
