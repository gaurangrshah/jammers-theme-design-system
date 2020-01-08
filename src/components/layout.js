/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
// import { useStaticQuery, graphql } from 'gatsby';
import { Box } from "rebass";
import PropTypes from "prop-types";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Header from "./header";
import "./layout.css";
import "../styles/main.scss";

const Layout = ({ children }) => {
  const title = "jammers-styleguide";
  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={title || `Jammers`} />
      <main>{children}</main>
      <Box bg={`red`} width={`100vw`} height={`250px`} color={`white`}>
        YOOOOO
      </Box>
    </ThemeProvider>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
