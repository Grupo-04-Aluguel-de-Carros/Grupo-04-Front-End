import { Gallery } from "../../components/Gallery";
import {
    FullWidh,
    Container,
    MapIcon,
    BackButton,
    DivHeader,
    TitleHeader,
    SubTitleHeader,
    DivLocation,
  } from "./styles";
  import { useNavigate } from "react-router-dom";
  
  export function ProductDetail() {
    const navigate = useNavigate();
  
  
    return (
      <>
        <FullWidh $full01>
          <Container $cnt01>
            <DivHeader>
              <SubTitleHeader>TEste</SubTitleHeader>
              <TitleHeader>TEstando o nome do carro vai aqui</TitleHeader>
            </DivHeader>
            <BackButton size={30} onClick={() => navigate(-1)}/>
          </Container>
        </FullWidh>
  
        <FullWidh $full02>
          <Container>
            <MapIcon size={30}></MapIcon>
  
            <DivLocation>
              <SubTitleHeader>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit laborum deleniti et aperiam nostrum voluptas facere
                alias culpa? Nostrum exercitationem ducimus numquam minus.
                Consequatur ipsum, eveniet explicabo nihil fugit aspernatur.
              </SubTitleHeader>
            </DivLocation>
          </Container>
        </FullWidh>

        <Gallery />
      </>
    );
  }
  