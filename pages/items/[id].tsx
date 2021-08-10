import Head from "next/head";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import Breadcrumb from "../../src/components/organisms/breadcrumb";
import ItemProd from "../../src/components/organisms/item/ItemProd";
import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";

export const Item: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title> Producto | {process.env.REACT_APP_TITLE} </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Breadcrumb />
        <ItemProd />
      </Layout>
    </ThemeProvider>
  );
};
export default Item;
