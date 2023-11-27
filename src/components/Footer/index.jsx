import {
  FullWidh,
  Container,
  Copy,
  SocialMediaArea,
  SocialMediaBtn,
} from "./styles.jsx";
import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "phosphor-react";

import {toast} from 'react-toastify'

export function Footer() {

  return (
    <FullWidh>
      <Container>
        <Copy>&copy;2023 Direitos reservados dhrentcar.com.br</Copy>
        <SocialMediaArea>
          <SocialMediaBtn onClick={() => toast("Facebook")}>
            <FacebookLogo size={35} />
          </SocialMediaBtn>
          <SocialMediaBtn onClick={() => toast("Linkedin")}>
            <LinkedinLogo size={35} />
          </SocialMediaBtn>
          <SocialMediaBtn onClick={() => toast("Instagram")}>
            <InstagramLogo size={35} />
          </SocialMediaBtn>
          <SocialMediaBtn onClick={() => toast("Twitter")}>
            <TwitterLogo size={35} />
          </SocialMediaBtn>
        </SocialMediaArea>
      </Container>
    </FullWidh>
  );
}
