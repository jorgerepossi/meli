/* eslint-disable @next/next/no-img-element */
import { Layout } from "../../src/components/templates/Layout";
import { Theme } from "../../src/themes";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Result
{
    author: {
        name: "Jorge",
        lastname: "Repossi",
    },
    item: {
        id: string;
        title: string;
    },
    price: {
        amount: number;
        currency: string;
        decimals: number;
    }
    picture: string
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
}


export const Item: FC = (): JSX.Element =>
{
    const [product, setProduct] = useState<Result>();
    const { query } = useRouter();
    const getServerSideProps = async () =>
    {
        const requestUrl = `http://localhost:3001/items/${ query.id }`;

        const res = await fetch(requestUrl);
        const api = await res.json();

        console.log(requestUrl);

        console.log(api);
        setProduct(api);
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
                {/*  <Image
                    src={product?.picture}
                    alt={product?.item.title}
                    width={680}
                    height={680}
                /> */}
                <img src={product?.picture}  alt={product?.item.title} width="680" height="680" />
                <p>{product?.item.title} </p>
                <p>{product?.description}</p>
                <p><span> {product?.price.currency} </span>{product?.price.amount} <span>   {product?.price.decimals} </span></p>
                <p>{product?.condition}</p>
                <p>{product?.sold_quantity}</p>
                <p>{product?.free_shipping}</p>

            </Layout>
        </ThemeProvider>
    );
};
export default Item;
