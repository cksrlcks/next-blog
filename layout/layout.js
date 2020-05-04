import { useEffect } from "react";
import Nav from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { initGA, logPageView } from "../analytics";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container className="global-inner">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

const Container = styled.div`
  margin: 1em auto 5em;
  min-height: 80vh;
`;
