import styled from "styled-components";

export const LoginBtn = styled.button`
  font-weight: 900;

  padding: 6px 30px;
  border-radius: 4px;
  border: ${props => props.$outline ? `1.5px solid ${props.theme['gray300']}` : props.theme['purple4']};
  background: ${props => props.$outline ? `transparent` : `${props.theme['gray100']}`};
  transition: all .3s;

  color: ${(props) => props.$outline ? props.theme['gray300'] : props.theme['purple3']};

  &:hover{
    cursor: pointer;
    border: ${props => props.$outline ? `1.5px solid ${props.theme['purple1']}` : `1.5px solid ${props.theme['purple1']}`};
    background: ${(props) => props.$outline ? props.theme['bg'] : props.theme['bg1']};
    color: ${(props) => props.$outline ? props.theme['gray100'] : props.theme['gray100']};
  }
`