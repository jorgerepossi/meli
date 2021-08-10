/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Container from "../../atoms/container";
import Grid from "../../atoms/grid";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import {
  BigPrice,
  BigTitle,
  NormalText,
  SmallPrice,
  Text,
} from "../../atoms/typography";
interface Result {
  author: {
    name: "Jorge";
    lastname: "Repossi";
  };

  item: {
    id: string;
    title: string | undefined;
  };
  price: {
    amount: number | undefined;
    currency: string | undefined;
    decimals: number | undefined;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export const ItemProd: FC = () => {
  const [product, setProduct] = useState<Result>();
  const { query } = useRouter();
  const getServerSideProps = async () => {
    const response = await fetch(`http://localhost:3001/items/${query.id}`);
    const api = await response.json();
    setProduct(api);
  };

  useEffect(() => {
    if (query.id) {
      getServerSideProps();
    }
  }, [query?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container center>
      <Grid white>
        <ContainerProd>
          <div className="ProductWrapper">
            <ContentWrapper>
              <img
                src={product?.picture || " "}
                alt={product?.item.title}
                width="100%"
              />
              <div>
                <BigTitle className="prod__title">
                  Descripción del Producto
                </BigTitle>
                <Text>{product?.description}</Text>
              </div>
            </ContentWrapper>
            <PriceWrapper>
              <div>
                <NormalText className="space__small">
                  {product?.condition}
                  <span>
                    {product?.sold_quantity
                      ? `- ${product?.sold_quantity} vendidos`
                      : ""}
                  </span>
                </NormalText>
              </div>
              <SmallPrice>{product?.item.title} </SmallPrice>

              <div className="prod__price space__big space__big--top space__big--bottom">
                <BigPrice>
                  <span className="prod__price--symbol">
                    {product?.price.currency === "ARS" ? "$" : ""}
                  </span>
                  <span>
                    {product?.price.amount
                      ? String(product?.price.amount).replace(
                          /(.)(?=(\d{3})+$)/g,
                          "$1."
                        )
                      : ""}
                  </span>
                  <span className="prod__price--cents">
                    {product?.price.decimals}
                  </span>
                </BigPrice>
              </div>
              <p>{product?.free_shipping}</p>
              <Button primary> Comprar</Button>
            </PriceWrapper>
          </div>
        </ContainerProd>
      </Grid>
    </Container>
  );
};

const ContainerProd = styled.div`
  overflow: hidden;
  margin: ${(margin) => margin.theme.margin.large};

  .ProductWrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }
`;

const ContentWrapper = styled.div`
  grid-column: 1 / span 12;
  @media (min-width: 980px) {
    grid-column: 1 / span 9;
  }
  .prod__title {
    margin: ${(margin) => margin.theme.margin.large} 0;
    color: ${(color) => color.theme.colors.black};
  }
`;
const PriceWrapper = styled.div`
  grid-column: 1 / span 12;
  @media (min-width: 980px) {
    grid-column: 10 / span 4;
  }
  .space__big {
    &--top {
      margin-top: ${(margin) => margin.theme.margin.large};
    }
    &--bottom {
      margin-bottom: ${(margin) => margin.theme.margin.large};
    }
  }
  .space__small {
    margin-bottom: ${(margin) => margin.theme.margin.small};
  }

  .prod__price {
    position: relative;
    margin: ${(margin) => margin.theme.margin.big};
    &--symbol {
      margin-right: 0.3em;
    }
    &--cents {
      font-size: 0.5em;
      top: 5px;
      position: absolute;
    }
  }
`;
export default ItemProd;
