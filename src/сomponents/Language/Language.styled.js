import styled from "styled-components";
import { theme } from "styles/theme";

export const Wrapp = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    order: 2;
  }
`;

export const Button = styled.button`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  padding: 12px 4px 12px 12px;

  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  svg {
    stroke: #3f3f3f;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.accentHover};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${theme.colors.accentHover};
  }
`;
