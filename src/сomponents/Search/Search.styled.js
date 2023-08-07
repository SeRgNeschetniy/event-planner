import styled from "styled-components";

export const Form = styled.div`
  position: relative;
  margin-left: auto;
  order: 2;

  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

export const IconSearch = styled.button`
  position: absolute;
  left: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 24px;
  height: 24px;
`;

export const IconCross = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 24px;
  height: 24px;
`;

export const Input = styled.input`
  width: 272px;
  height: 48px;
  padding: 12px 12px 12px 48px;
  color: #888;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 14px */
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;

  @media screen and (min-width: 768px) {
    width: 368px;
  }

  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;
