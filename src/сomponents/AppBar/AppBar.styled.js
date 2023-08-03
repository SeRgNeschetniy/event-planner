import styled from "styled-components";
import { ReactComponent as LogoIcon } from "images/logo.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;
`;

export const Logo = styled(LogoIcon)`
  width: 147px;
  height: 33px;
  margin: 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
