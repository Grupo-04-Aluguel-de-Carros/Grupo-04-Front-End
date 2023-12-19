import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 90%;
  padding: 5px;


  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const AreaDist = styled.div`
  display: flex;

  width: 100%;
`;

export const SidebarNav=  styled.nav`
    width: 100%;
    max-width: 350px;

    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme['bg']};
`;

export const ButtonArea = styled.div`
  width: 100%;
`;

export const MenuButton = styled.button`
  width: 90%;
  padding: 16px;
  margin: 6px 10px;
  
  color: ${(props) => props.theme['gray100']};
  font-weight: 900;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme["purple3"]};


  display: flex;
  justify-content: space-between;
  align-items: center;


  &:hover{
    background-color: ${(props) => props.theme["bg1"]};
    cursor: pointer;
  }

  &:active{
    background-color: ${(props) => props.theme["gray900"]};
  }
`;