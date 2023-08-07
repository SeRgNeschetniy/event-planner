import styled from "styled-components";
import { priorityColors } from "styles/GlobalStyles";
import { theme } from "styles/theme";

export const Wrapp = styled.div`
  width: 628px;
  margin: 0 auto;
`;

export const TitleWrapp = styled.div`
  margin-bottom: 24px;
`;

export const CardWrapp = styled.div`
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 8px;
  background: ${theme.colors.white};
  transition: all ${theme.animation.cubicBezier};
`;

export const Item = styled.div`
  height: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 8px;
  background: ${theme.colors.white};
  transition: all ${theme.animation.cubicBezier};
`;

export const ImageWrapp = styled.div`
  position: relative;
  height: 272px;
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const InfoWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 34px 40px 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const BadgeWrapp = styled.div`
  display: flex;
  gap: 12px;
`;

export const Badge = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  color: ${theme.colors.accent};
  color: ${(p) => priorityColors[p.priority]};
  background: ${theme.colors.white};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  transition: all ${theme.animation.cubicBezier};
`;

export const ButtonDelete = styled.a`
  border-radius: 4px;
  padding: 8px 16px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  transition: ${theme.animation.cubicBezier};
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

export const ButtonEdit = styled.a`
  border-radius: 4px;
  padding: 8px 16px;
  color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  transition: ${theme.animation.cubicBezier};
  border: 1px solid ${theme.colors.accent};
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
