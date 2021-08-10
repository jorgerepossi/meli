import { ThemeProvider } from "styled-components";
//import Layout from "../src/components/templates/Layout";
import { Theme } from "./../src/themes";
import Head from "next/head";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../src/components/templates/Layout"));
export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title> Inicio | {process.env.REACT_APP_TITLE} </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout></Layout>
    </ThemeProvider>
  );
}
