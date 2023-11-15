import { SliderCardTitle, SliderCardArea, SliderCardDescription, BtnArea } from "./styles";
import { CustomButton } from "../Button";

export function SliderCard() {
  return (
    <SliderCardArea>
      <SliderCardTitle>Conheça a maior frota de alguma coisaa</SliderCardTitle>

      <SliderCardDescription>testeteste testeteste testeteste testeteste testetestetesteteste testetestetestetestetesteteste testetestetestetestetesteteste testeteste testeteste testeteste testetestetesteteste testeteste testetestetestetestetesteteste testeteste testetestetesteteste testeteste testetestetesteteste testeteste testeteste testeteste</SliderCardDescription>
      <BtnArea>
        <CustomButton name="Acessar" onClick={() => alert("teste")} style={{padding: '15px 40px'}}/>
        <CustomButton $outline name="Conferir promoções" onClick={() => alert("teste")} style={{padding: '15px 40px' }} />
      </BtnArea>
    </SliderCardArea>
  );
}
