import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { SliderCard } from "../../components/SliderCard";

import {
  AreaDate,
  AreaDateLimit,
  Container,
  LabelDate,
  SelectDate,
  OptionDate,
} from "./styles";

import { CustomButton } from "../../components/Button";
import { Agencys } from "../../components/Agencys";

export function Home() {
  const selectOptions = [
    { value: "", text: "-- Agência --" },
    { value: "gramado", text: "Gramado - RS" },
    { value: "riodejaneiro", text: "Rio de Janeiro - RJ" },
    { value: "saopaulo", text: "São Paulo - SP" },
  ];

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

  const [selected, setSelected] = useState(selectOptions[0].value);
  const [startDate, setStartDate] = useState(new Date());

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

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>

      <Container>
        <AreaDate onSubmit={handleForms}>
          <AreaDateLimit>
            <LabelDate>
              Escolha qual agência deseja retirar seu veiculo
            </LabelDate>

            <SelectDate value={selected} onChange={handleChange}>
              {selectOptions.map((option) => (
                <OptionDate key={option.value} value={option.value}>
                  {option.text}
                </OptionDate>
              ))}
            </SelectDate>
          </AreaDateLimit>

          <AreaDateLimit>
            <LabelDate>Escolha o dia da reserva</LabelDate>
            <DatePicker
              locale={ptBR}
              showIcon
              selected={startDate}
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />
          </AreaDateLimit>

          <CustomButton name="consultar" type="submit" />
        </AreaDate>
      </Container>

        <Agencys />
    </>
  );
}
