// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { SliderCard } from "../../components/SliderCard";

import { AreaDate, AreaDateLimit, LabelDate, SelectDate } from "./styles";

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
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "500px" }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>

      <AreaDate>
        <AreaDateLimit>
          <LabelDate>Testeaaa</LabelDate>
          <SelectDate></SelectDate>
        </AreaDateLimit>

        <AreaDateLimit>
          <LabelDate>Testeaaa</LabelDate>
          <SelectDate>
            <option>teste</option>
            <option>teste</option>
            <option>teste</option>
            <option>teste</option>
            <option>teste</option>
          </SelectDate>
        </AreaDateLimit>

        <AreaDateLimit>
          <LabelDate>Testeaaa</LabelDate>
          <SelectDate></SelectDate>
        </AreaDateLimit>
      </AreaDate>
    </>
  );
}
