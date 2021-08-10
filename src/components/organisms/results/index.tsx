/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../../atoms/flex";
import Grid from "../../atoms/grid";
import ListItem from "../../atoms/list/";
import ShippingIcon from "../../atoms/shipping";
import ImgCard from "../../molecules/imgCard";
import Container from "../../atoms/container";
import Link from "next/link";
import EmptyResult from "../../molecules/empty";

import BreadcrumbList from "../breadcrumbList/BreadcrumbList";
import { MediumText, SmallPrice } from "../../atoms/typography";

interface Result {
  free_shipping: boolean;
  state_name: string;
  currency: string;
  id: string;
  categories: Array<string>;
  items: [
    {
      id: string;
      title: string;
      free_shipping: boolean;
      picture: string;
      price: {
        amount: number;
        currency: string;
        decimals: number;
      };
    }
  ];

  address: string;
}

interface Items {
  id?: string;
  title?: string;
  thumbnail?: string;
  price?: number;
  shipping?: boolean;
  search?: string;
  currency?: string;
  categories?: string;
  address?: string;
}

export const Results: FC<Items> = (): JSX.Element => {
  const [articles, setArticles] = useState<Items[]>([]);
  const { query } = useRouter();

  const getServerSideProps = async () => {
    const requestUrl = `${process.env.REACT_APP_SEARCH}${query.search}`;

    const res = await fetch(requestUrl);
    const api = await res.json();
    const resSearch = api.map((item: Result) => {
      return {
        id: item.items[0].id,
        price: item.items[0].price.amount,
        currency: item.items[0].price.currency,
        title: item.items[0].title,
        address: item.address,
        thumbnail: item.items[0].picture,
        shipping: item.items[0].free_shipping,
        free_shipping: item.free_shipping,
        categories: item.categories,
      };
    });
    setArticles(resSearch);
  };

  useEffect(() => {
    if (query.search) {
      getServerSideProps();
    }
  }, [query?.search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <BreadcrumbList>
        <ul>{/* articles.categories[0] */}</ul>
      </BreadcrumbList>
      <Container center>
        <Grid white>
          <InnerGrid>
            <ul>
              {articles.length !== 0 ? (
                articles?.map((el: Items) => (
                  <ListItem key={el?.id}>
                    <Flex flex>
                      <ImgCard
                        src={el?.thumbnail}
                        alt={el?.title}
                        width={180}
                        height={180}
                        style={{ borderRadius: 4 }}
                      />
                      <InfoWrapper>
                        <div>
                          <Flex
                            flex
                            style={{ justifyContent: "space-between" }}
                          >
                            <div className="space__big--bottom small__space--top">
                              <Flex flex>
                                <SmallPrice className="small__space">
                                  <span className="small__space">
                                    {" "}
                                    {el?.currency === "ARS" ? "$" : "USD"}
                                  </span>
                                  <span>
                                    {String(el?.price).replace(
                                      /(.)(?=(\d{3})+$)/g,
                                      "$1."
                                    )}
                                  </span>
                                </SmallPrice>
                                <span>
                                  {el?.shipping === true ? (
                                    <ShippingIcon />
                                  ) : (
                                    ""
                                  )}{" "}
                                </span>
                              </Flex>
                            </div>
                            <div className="info__block">{el?.address}</div>
                          </Flex>
                        </div>
                        <div>
                          <Link href={`items/${el?.id}`}>
                            <a className="black__color">
                              <MediumText> {el?.title} </MediumText>
                            </a>
                          </Link>
                        </div>
                      </InfoWrapper>
                    </Flex>
                  </ListItem>
                ))
              ) : (
                <EmptyResult info="Lo Sentimos, No se han encontrdo resultados para lo que estás buscando..." />
              )}
            </ul>
          </InnerGrid>
        </Grid>
      </Container>
    </>
  );
};

const InnerGrid = styled.div`
  width: 100%;
`;

const InfoWrapper = styled.div`
  flex: 1;
  margin-right: ${(margin) => margin.theme.margin.small};
  .black__color {
    color: ${(color) => color.theme.colors.black};
    text-decoration: none;
  }
  .info__block {
    width: 100%;
    max-width: 200px;
  }

  .small__space {
    margin-right: ${(margin) => margin.theme.margin.small};
    &--top {
      margin-top: ${(margin) => margin.theme.margin.small};
    }
  }
  .space__big {
    &--top {
      margin-top: ${(margin) => margin.theme.margin.large};
    }
    &--bottom {
      margin-bottom: ${(margin) => margin.theme.margin.large};
    }
  }
`;

export default Results;
