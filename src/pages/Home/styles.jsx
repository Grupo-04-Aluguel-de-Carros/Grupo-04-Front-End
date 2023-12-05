import styled from "styled-components";
import banner from "../../assets/banner1.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 4px;
  margin: 0 auto;
  z-index: 99;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 20px;
  }
`;

export const BannerArea = styled.div`
  background-image: url(${banner});
  object-fit: contain;
  width: 100%;
  height: 500px;

  padding: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 24px;
`;

export const BannerSubTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  line-height: 1.5;
`;

export const AreaReserva = styled.form`
  background: ${(props) => props.theme["gray100"]};

  width: 100%;
  margin: 0 auto;
  padding: 35px 28px;

  margin-top: -46px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AreaReservaLocalSelect = styled.select`
  width: 80%;
  max-width: 650px;
  padding: 18px;

  color: ${(props) => props.theme["purple4"]};

  border: none;

  border: 1px solid #4a02936a;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AreaReservaButton = styled.button`
  max-width: 10%;
  max-width: 650px;
  padding: 18px;

  text-align: center;

  background: linear-gradient(to right top, #370080, #6004a5);

  border: none;
  border-radius: 8px;

  cursor: pointer;

  color: ${(props) => props.theme["gray100"]};
  font-weight: 900;

  transition: all 0.9s;

  &:hover {
    background: linear-gradient(to right top, #6004a5, #370080);
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const AreaCarsPromotion = styled.section`
  width: 100%;
  height: 350px;
`;

export const CardsCar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardCar = styled.div`
  width: 100%;
  display: flex;

`;

export const CardCarImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  width: 70%;
  max-width: 500px;

  object-fit: contain;
`;

export const CardCarTitle = styled.h1`
  font-size: 3rem;
  text-align: left;
`;

export const CardCarDescribeArea = styled.div`
  margin: auto 0;
  margin-left: -85px;
  margin-right: 50px;
  height: 150px;

  padding: 100px 85px;

  background-color: #191818dc;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardPrice = styled.h1`
font-size: 2rem;
color: ${(props) => props.theme["purple1"]};
`;

export const CardCarButton = styled.button`
  max-width: 20%;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid ${(props) => props.theme["purple5"]};
  background-color: transparent;
`;






export const AgencyArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const AgencyCard = styled.div`
  border-radius: 6px;
  padding: 30px;

  cursor: pointer;
`;

export const AgencyCardImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  width: 100%;
  height: 200px;
  max-width: 450px;

  border-top-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin-bottom: 6px;

  object-fit: cover;
`;

export const AgencyUnit = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AgencyTitle = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const SubTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  opacity: 0.8;

  text-transform: uppercase;
`;

export const AgencyCadTitle = styled.h3`
  font-size: 1.4rem;
`;

export const AgencyCardDesccription = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1.1px;

  margin-top: 8px;
`;

export const CardButton = styled.button`
  background: transparent;
  border: none;
  margin-top: 16px;
  color: ${(props) => props.theme["purple2"]};
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    color: ${(props) => props.theme["purple1"]};
    cursor: pointer;
  }
`;

// DAQUI PRA BAIXO NAO APROVEITA NADA

export const AreaDateLimit = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelDate = styled.label`
  font-size: 0.6rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray800"]};
`;

export const SelectDate = styled.select`
  width: 100%;
  padding: 6px;
`;

export const OptionDate = styled.option`
  font-size: 200px;
`;
