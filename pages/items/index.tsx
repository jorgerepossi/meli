import React from "react";
import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import dynamic from "next/dynamic";

const Results = dynamic(() => import("../../src/components/organisms/results"));
export const Search = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title> Resultados | {process.env.REACT_APP_TITLE} </title>
      </Head>
      <Layout>
        <Results />
      </Layout>
    </ThemeProvider>
  );
};

export default Search;
