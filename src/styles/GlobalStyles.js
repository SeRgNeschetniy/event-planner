import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 15px;
  }
`;
