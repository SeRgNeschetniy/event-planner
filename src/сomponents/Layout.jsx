import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Main, Container } from "styles/GlobalStyles";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
