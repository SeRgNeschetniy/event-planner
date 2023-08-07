import styled from "styled-components";

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    margin-top: 64px;
  }
`;

export const ButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
