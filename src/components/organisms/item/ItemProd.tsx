/* eslint-disable @next/next/no-img-element */

import { FC, useState } from "react";
import styled from "styled-components";
import { useServerSideProps } from "../../../hooks/useServerSideProps";
import { Button } from "../../atoms/button";
import Grid from "../../atoms/grid";
import ShippingIcon from "../../atoms/shipping";
import Breadcrumb from "../breadcrumb";
import ProductPrice from "../productprice";
import Specifications from "../specifications";
import Container from "../../atoms/container";
import ProductHeader from "../productheader";

interface Result
{
  author: {
    name: "Jorge";
    lastname: "Repossi";
  };

  item: {
    id: string;
    title: string;
  };
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  picture: string;
  condition: string;
  shipping: boolean;
  sold_quantity: number;
  description: string;
  category_id: string;
}

export const ItemProd: FC = (): JSX.Element =>
{
  const { product } = useServerSideProps<Result>();


  const Shipping = () =>
  {
    return (
      <div>
        <ShippingIcon /> <span> Entrega a acordar con el vendedor</span>
      </div>
    );
  };


  if (!product) {
    return <Container center>
      <Grid>
        <Spinner>
          <img src="../../../../loading.gif" alt="loading" width="80" />
        </Spinner>
      </Grid>
    </Container>
  }
  return (

    <>


      <Breadcrumb
        home="Inicio"
        name={product?.item.title}
        category={product?.category_id}
      />
      <Container center>
        <Grid white>
          <ContainerProd>
            <div className="ProductWrapper">
              <ContentWrapper>
                <img
                  src={product?.picture || " "}
                  alt={product?.item.title}
                  width="680"
                />
                <Specifications
                  title="Descripción del Producto"
                  text={product?.description || undefined}
                />
              </ContentWrapper>
              <PriceWrapper>
                <ProductHeader
                  title={product?.item.title}
                  condition={String(product?.condition)}
                  quantity={String(product?.sold_quantity && product?.sold_quantity ? ` - ${ product?.sold_quantity } vendidos` : ""
                  )}
                />

                <ProductPrice
                  symbol={String(product?.price.currency === "ARS" ? "$" : "")}
                  decimals={String(product?.price.decimals)}
                  price={String(
                    product?.price.amount && product?.price.amount
                      ? String(product?.price.amount).replace(
                        /(.)(?=(\d{3})+$)/g,
                        "$1."
                      )
                      : ""
                  )}
                />
                {product?.shipping === true ? <Shipping /> : ""}
                <Button primary> Comprar</Button>
              </PriceWrapper>
            </div>
          </ContainerProd>
        </Grid>
      </Container>
    </>
  );
};

const ContainerProd = styled.div`
  overflow: hidden;
  margin: ${ (margin) => margin.theme.margin.large };

  .ProductWrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }
`;

const ContentWrapper = styled.div`
  grid-column: 1 / span 12;
  img {
    border-radius: 4px;
  }
  @media (min-width: 980px) {
    grid-column: 1 / span 9;
  }
  .prod__title {
    margin: ${ (margin) => margin.theme.margin.large } 0;
    color: ${ (color) => color.theme.colors.black };
  }
  .specifications {
    p {
      color: ${ (color) => color.theme.colors.grey };
      line-height: 1.35;
    }
  }
`;
const PriceWrapper = styled.div`
  grid-column: 1 / span 12;
  @media (min-width: 980px) {
    grid-column: 10 / span 4;
  }
  .space__big {
    &--top {
      margin-top: ${ (margin) => margin.theme.margin.large };
    }
    &--bottom {
      margin-bottom: ${ (margin) => margin.theme.margin.large };
    }
  }
  .space__small {
    margin-bottom: ${ (margin) => margin.theme.margin.small };
  }

  .prod__price {
    position: relative;
    margin: ${ (margin) => margin.theme.margin.big };
    &--symbol {
      margin-right: 0.3em;
    }
    &--cents {
      font-size: 0.5em;
      top: 5px;
      position: absolute;
    }
  }
  .text__bolder {
    font-weight: bold;
  }
`;

const Spinner = styled.div`
 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0 20px;
 
`;

export default ItemProd;
