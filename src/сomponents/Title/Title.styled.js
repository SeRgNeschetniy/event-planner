import styled from "styled-components";
import { theme } from "styles/theme";

export const H1 = styled.h1`
  color: ${theme.colors.title};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
