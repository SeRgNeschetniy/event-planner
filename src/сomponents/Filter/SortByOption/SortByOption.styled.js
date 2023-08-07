import styled from "styled-components";
import { theme } from "styles/theme";

export const Wrapp = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(p) => (p.isOpen ? "170px" : "56px")};

  padding: 16px;

  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  border-bottom-left-radius: ${(p) => (p.isOpen ? 0 : "8px")};
  border-bottom-right-radius: ${(p) => (p.isOpen ? 0 : "8px")};

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

  @media screen and (min-width: 768px) {
    width: 170px;
  }
`;

export const TextWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const List = styled.ul`
  position: absolute;

  width: 170px;
  top: 56px;
  left: 0;

  background: ${theme.colors.white};

  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transform: ${(p) => (p.isOpen ? "translateY(0)" : "translateY(5%)")};
  transition: all 0.5s linear;
  z-index: 10;

  border-top: 1px solid ${theme.colors.divider};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;

  @media screen and (min-width: 768px) {
    width: 158px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 24px 8px 24px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  color: ${theme.colors.divider};
  border-bottom: 1px solid ${theme.colors.divider};

  svg {
    stroke: #3f3f3f;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${theme.colors.accent};
    border-bottom: 1px solid ${theme.colors.accent};

    &:last-child {
      border-bottom: none;
    }
  }

  &:hover svg,
  &:focus svg {
    stroke: ${theme.colors.accent};
  }
`;
