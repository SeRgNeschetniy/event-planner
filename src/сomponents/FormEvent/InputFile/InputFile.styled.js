import styled from "styled-components";
import { theme } from "styles/theme";

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 372px;
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

export const CalendarWrapp = styled.ul`
  margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 100%;
  padding: 16px;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: none;
  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;
  z-index: 2;
`;

export const ButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const ButtonCancel = styled.a`
  border-radius: 4px;
  padding: 8px 16px;
  color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  transition: ${theme.animation.cubicBezier};
  border: 1px solid ${theme.colors.accent};
  text-align: center;
  cursor: pointer;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  &:hover,
  &:focus {
    color: ${theme.colors.accentHover};
    border: 1px solid ${theme.colors.accentHover};
  }
`;

export const ButtonChoose = styled.a`
  border-radius: 4px;
  padding: 8px 16px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  transition: ${theme.animation.cubicBezier};
  text-align: center;
  cursor: pointer;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentHover};
  }
`;
