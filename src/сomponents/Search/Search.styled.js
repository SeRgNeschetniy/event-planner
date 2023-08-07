import styled from "styled-components";


export const Form = styled.form`
  position: relative;
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
  width: 410px;
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
`;
