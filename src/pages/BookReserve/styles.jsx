import styled from "styled-components";
import { MapPin, CaretLeft, Airplay } from "phosphor-react";

export const FullWidh = styled.nav`
  width: 100%;
  padding: 8px;
  background: ${(props) =>
    props.$full01 ? `${props.theme["purple4"]}` : props.theme["purple3"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 5px;
  margin: 0 auto;

  display: flex;

  justify-content: ${(props) => (props.$cnt01 ? "space-between" : "")};
  align-items: center;

  @media (max-width: 768px) {
    justify-content: ${(props) => (props.$cnt01 ? "space-around" : "")};
  }
`;

export const DivHeader = styled.div``;

export const BackButton = styled(CaretLeft)`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: ${(props) => props.theme["gray300"]};
    transform: scale(1.2);
  }
`;

export const TitleHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SubTitleHeader = styled.h2`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const DivLocation = styled.div`
  width: 70%;
`;

export const MapIcon = styled(MapPin)`
  margin-right: 10px;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const DivDescription = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  padding: 10px 0;
  opacity: 0.9;
  
  border-bottom: ${props => props.$linePurple ? `1.5px solid ${props.theme['purple1']}` : `.5px solid ${props.theme['gray300']}`};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 5px 0;
    border-bottom: 1px solid ${(props) => props.theme["purple1"]};
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const DivFeaturesArea = styled.div`
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const DivFeaturesIcons = styled.div`
  width: 100%;
  margin-top: 30px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const IconArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconTitle = styled.p`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const IconFeature = styled(Airplay).attrs({
  size: 25,
})`
  color: ${(props) => props.theme["gray400"]};
`;

export const DivPolicyArea = styled.div`
  width: 100%;

  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const DivPolicyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DivPolicyUnit = styled.div`
  margin-top: 15px;
  padding: 4px;
`;

export const DivPolicyTitle = styled.h3``;

export const DivDateArea = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${(props) => props.theme["bg1"]};
  border-radius: 16px;
  margin-top: 35px;
`;

export const DivDateCalendar = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 950px){
    flex-direction: column;
    gap:20px;
  }
`;

export const DivBtnCalendar = styled.div`
  width: 400px;
  border-radius: 16px;
  padding: 25px;

  background-color: ${(props) => props.theme["purple3"]};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CalendarText = styled.h2`
text-align: left;

  @media(max-width: 950px){
    font-size: 1rem;
  }

`;

export const DivSidebars =  styled.div`
display: flex;

margin-top: 16px;

@media(max-width: 950px){
    flex-direction: column;
    gap: 18px;
    padding: 24px;

    align-items: center;
  }


`;


export const FormUser = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const FormInput = styled.input`
width: 45%;
padding: 15px;
margin: 0 auto;
`;

export const DivLeftSide = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const DivRightSide = styled.div`
  width: 60%;
  margin: auto 20px;
  height: 100%;


  border: 3px solid ${(props) => props.theme["purple4"]};
  
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 950px){
    width: 100%;
    max-width: 750px;
  }

`;

export const GalleryMainImage = styled.img.attrs((props) => ({
  src: props.$source,
}))`
  width: 100%;

`;

export const TitleResume = styled.h2`
  font-size: 1.8rem;
  text-align: left;
  margin: 10px;

  border-bottom: 3px solid ${(props) => props.theme["purple4"]};
  width: 75%;
`;

export const SubTitleResume = styled.p`
  font-weight: 100;
  text-transform: uppercase;
  color: ${(props) => props.theme["gray100"]};
  margin: 10px;
`;

export const ButtonReserve = styled.button`

width: 80%;
padding: 8px;
margin: 50px auto;
border: none;

font-weight: 900;
color: ${(props) => props.theme["gray100"]};
text-transform: uppercase;
background-color: ${(props) => props.theme["purple1"]};



transition: all .5s;

&:hover{
  cursor: pointer;
  background-color: ${(props) => props.theme["purple3"]};
  color: ${(props) => props.theme["gray300"]};
}
`;