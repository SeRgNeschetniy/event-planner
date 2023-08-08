import styled from "styled-components";
import background from "images/background.svg";
import { theme } from "./theme";

export const Container = styled.div`
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 24px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0;
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const priorityColors = {
  High: theme.colors.hight,
  Medium: theme.colors.medium,
  Low: theme.colors.low,
};
