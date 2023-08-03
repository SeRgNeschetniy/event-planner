import { Container } from "styles/GlobalStyles";
import { Header, Logo } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
      </Container>
    </Header>
  );
};
