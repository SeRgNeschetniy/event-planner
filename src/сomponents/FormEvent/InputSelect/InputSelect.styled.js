import styled from "styled-components";
import { theme } from "styles/theme";

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 56px;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${theme.colors.divider};
  border-color: ${(p) => p.$error && p.theme.colors.form.error};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.accent};
  }

  width: 240px;

  @media screen and (min-width: 768px) {
    width: 308px;
  }

  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const TextWrapp = styled.div`
  opacity: ${(p) => !p.$select && "0.5"};
`;

export const SelectHeader = styled.div`
  position: relative;
`;

export const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    stroke: ${theme.colors.accent};
  }
`;
