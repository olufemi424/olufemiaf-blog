import React from "react";
import { ThemeProvider } from "styled-components";
import { AppWrapperStyle, AppMainStyle } from "./LayoutStyles";
import { ContainerStyle } from "../styles/CommonStyles";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapperStyle>
        <Header />
        <AppMainStyle>
          <ContainerStyle>{children}</ContainerStyle>
        </AppMainStyle>
        <Footer />
      </AppWrapperStyle>
    </ThemeProvider>
  );
};

export default Layout;
