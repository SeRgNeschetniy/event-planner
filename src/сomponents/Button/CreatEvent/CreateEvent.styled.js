import styled from "styled-components";
import { theme } from "styles/theme";

export const Button = styled.button`
  width: 56px;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;

  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  background: ${theme.colors.accent};
  color: ${theme.colors.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: all ${theme.animation.cubicBezier};

  &:hover,
  &:focus {
    background: ${theme.colors.accentHover};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 12px;
    width: 193px;
  }
`;
