import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";



interface Result
{
    item: {
        id: string
    }
}

interface Items {
    id?: string;
    
  }
  

export const Item: FC<Items> = (): JSX.Element =>
{
    const [product, setProduct] = useState<Items[]>([]);
    const { query } = useRouter();
    const getServerSideProps = async () =>
    {
        const requestUrl = `http://localhost:3001/items/${ query.id }`;
        
        const res = await fetch(requestUrl);
        const api = await res.json();


        console.log(requestUrl)


        const resSearch = api.map((i: Result) => {
            return {
                id: i.item,
               
            };
          
        });
        console.log()
        console.log(api)
        setProduct(resSearch);
    };

    useEffect(() =>
    {
        if (query.id) {
            getServerSideProps();
        }
    }, [query?.id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title> Producto | {process.env.REACT_APP_TITLE} </title>
            </Head>
            <Layout>
                test
                {product.map((el: Items) =>
                {
                    return (
                        el?.id
                    )
                 })}
            </Layout>
        </ThemeProvider>
    );
};
export default Item;
