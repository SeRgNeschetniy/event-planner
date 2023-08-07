import styled from "styled-components";
import { priorityColors } from "styles/GlobalStyles";
import { theme } from "styles/theme";

export const Item = styled.div`
  width: 302px;
  height: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 12px;
  background: ${theme.colors.white};
  transition: all ${theme.animation.cubicBezier};
`;

export const ImageWrapp = styled.div`
  position: relative;
  height: 342px;
  width: 100%;
  overflow: hidden;

  & span {
    display: initial !important;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  ${Item}:hover &, ${Item}:focus & {
    height: 280px;
  }
`;

export const InfoWrapp = styled.div`
  padding: 16px;
`;

export const DateTimeLocationWrapp = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background: rgba(255, 255, 255, 0.8);

  color: ${theme.colors.accent};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const DateTimeLocationItem = styled.div``;

export const Title = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const BadgeWrapp = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
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
`;

export const ButtonWrapp = styled.div`
  display: none;
  justify-content: flex-end;
  padding: 0 16px 16px 16px;

  transition: all ${theme.animation.cubicBezier};

  ${Item}:hover &, ${Item}:focus & {
    display: flex;
  }
`;

export const ButtonMoreInfo = styled.a`
  border-radius: 8px;
  padding: 10px 24px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  transition: ${theme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentHover};
  }
`;
