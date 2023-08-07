import { Container } from "styles/GlobalStyles";
import { Header, HeaderWrapp, Logo } from "./AppBar.styled";
import { Search } from "сomponents/Search/Search";

export const AppBar = () => {
  const onSearch = (searchQuery) => {
    console.log(searchQuery);
  };

  return (
    <Header>
      <Container>
        <HeaderWrapp>
          <Logo />
          <Search onSearch={onSearch} />
        </HeaderWrapp>
      </Container>
    </Header>
  );
};
