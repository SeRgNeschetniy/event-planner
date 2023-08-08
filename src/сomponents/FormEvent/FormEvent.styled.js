import styled from "styled-components";
import { Field, ErrorMessage, Form } from "formik";
import { theme } from "styles/theme";

export const FormWrapp = styled(Form)`
  padding: 40px 16px;
  border-radius: 8px;
  background: ${theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media screen and (min-width: 1280px) {
    padding: 40px 40px 54px 40px;
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 42px;
  row-gap: 20px;
  flex-wrap: wrap;

  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    max-height: 480px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 320px;
  }
`;
export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FieldWrapp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled(Field)`
  width: 240px;

  padding: 15px 12px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.divider};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  max-height: 56px;

  &::file-selector-button {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 308px;
  }

  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const Textarea = styled(Field)`
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.divider};

  min-height: 156px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  resize: none;

  width: 240px;

  @media screen and (min-width: 768px) {
    width: 308px;
  }

  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -20px;
  right: 20px;

  color: ${theme.colors.hight};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const Select = styled.select`
  padding: 15px 12px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.divider};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  max-height: 56px;
`;

export const Label = styled.label`
  color: ${theme.colors.accent};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

export const Button = styled.button`
  padding: 16px 50px;
  border-radius: 8px;
  background: ${theme.colors.accent};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color ${theme.animation.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentHover};
  }

  @media screen and (max-width: 767.99px) {
    width: 100%;
  }
`;

export const ButtonClear = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 40px;
  right: 12px;

  svg {
    stroke: ${theme.colors.accent};
  }
`;

export const List = styled.ul`
  margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 100%;
  padding: 0px 16px;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: none;
  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;
  z-index: 2;
`;

export const Item = styled.li`
  cursor: pointer;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.divider};

  padding: 16px 0;

  text-align: start;
  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  &:last-of-type {
    border: none;
  }

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;
