import React from "react";
import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";
import { ThemeProvider } from "styled-components";
import Results from "../../src/components/organisms/results";
import Breadcrumb from "../../src/components/organisms/breadcrumb";

export const Search = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Breadcrumb />
        <Results />
      </Layout>
    </ThemeProvider>
  );
};

export default Search;
