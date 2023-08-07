import { Container } from "styles/GlobalStyles";
import { Header, HeaderWrapp, Logo } from "./AppBar.styled";
import { Search } from "сomponents/Search/Search";
import { Language } from "сomponents/Language/Language";

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
          <Language />
        </HeaderWrapp>
      </Container>
    </Header>
  );
};
