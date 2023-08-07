import styled from "styled-components";
import { ReactComponent as LogoImg } from "images/logo.svg";

export const Header = styled.header`
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;
`;

export const HeaderWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 26px 0 18px 0;
  }
`;

export const Logo = styled(LogoImg)`
  width: 147px;
  height: 33px;
  margin: 0;
`;
