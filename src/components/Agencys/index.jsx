import {
    FullWidh,
    AgencyArea,
    AgencyUnit,
    AgencyTitle,
    AgencySubTitle,
    AgencyAdress,
    AgencyUnitis,
    Container
} from "./styles";

import { CustomButton } from "../Button";

export function Agencys() {
  return (
    <FullWidh>
      <Container>
        <AgencyArea>
          <AgencyTitle>Conheça nossas agências</AgencyTitle>
          <AgencyUnitis>

          <AgencyUnit>
            <AgencySubTitle>GRAMADO</AgencySubTitle>
            <AgencyAdress>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore a obcaecati eaque! Sequi, quidem deserunt dolorem nam, voluptates laudantium veritatis provident impedit omnis iure, maxime quia dolorum saepe mollitia.</AgencyAdress>
            <CustomButton name={"Ver carros"} style={{background: '#202024', color: 'white'}}/>
          </AgencyUnit>

          <AgencyUnit>
            <AgencySubTitle>SÃO PAULO</AgencySubTitle>
            <AgencyAdress>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore a obcaecati eaque! Sequi, quidem deserunt dolorem nam, voluptates laudantium veritatis provident impedit omnis iure, maxime quia dolorum saepe mollitia.</AgencyAdress>
            <CustomButton name={"Ver carros"} style={{background: '#202024', color: 'white'}}/>
          </AgencyUnit>

          <AgencyUnit>
            <AgencySubTitle>RIO DE JANEIRO</AgencySubTitle>
            <AgencyAdress>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore a obcaecati eaque! Sequi, quidem deserunt dolorem nam, voluptates laudantium veritatis provident impedit omnis iure, maxime quia dolorum saepe mollitia.</AgencyAdress>
            <CustomButton name={"Ver carros"} style={{background: '#202024', color: 'white'}}/>
          </AgencyUnit>
        
        
        </AgencyUnitis>

        </AgencyArea>
        </Container>
    </FullWidh>
  );
}
