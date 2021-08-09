import { ThemeProvider } from "styled-components";
import Layout from "../src/components/templates/Layout";
import { Theme } from "./../src/themes";
import Head from "next/head";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title> Inicio | {process.env.REACT_APP_TITLE} </title>
      </Head>
      <Layout></Layout>
    </ThemeProvider>
  );
}
