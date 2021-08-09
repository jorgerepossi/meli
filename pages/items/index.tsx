import React from "react";
import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";
import { ThemeProvider } from "styled-components";
import Results from "../../src/components/organisms/results";
import Breadcrumb from "../../src/components/organisms/breadcrumb";
import Head from "next/head";

export const Search = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title> Resultados | {process.env.REACT_APP_TITLE} </title>
      </Head>
      <Layout>
        <Breadcrumb />
        <Results />
      </Layout>
    </ThemeProvider>
  );
};

export default Search;
