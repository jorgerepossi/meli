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

interface Result {
  free_shipping: boolean;
  state_name: string;
  currency: string;
  id: string;
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

  address: { state_name: string };
}

interface Items {
  id?: string;
  title?: string;
  thumbnail?: string;
  price?: number;
  shipping?: boolean;
  search?: string;
  currency?: string;
}

const InnerGrid = styled.div`
  width: 100%;
`;

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
        state_name: item.address?.state_name,
        thumbnail: item.items[0].picture,
        shipping: item.items[0].free_shipping,
        free_shipping: item.free_shipping,
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
    <Container center>
      <Grid white>
        <InnerGrid>
          <ul>
            {console.log(articles.length)}
            {articles.length !== 0 ? (
              articles?.map((el: Items) => (
                <ListItem key={el?.id}>
                  <Flex flex>
                    <ImgCard
                      src={el?.thumbnail}
                      alt={el?.title}
                      width={180}
                      height={180}
                    />
                    <div>
                      <p>
                        <span> {el?.currency === "ARS" ? "$" : "USD"}</span>
                        <span>
                          {String(el?.price).replace(
                            /(.)(?=(\d{3})+$)/g,
                            "$1."
                          )}
                        </span>
                        <span>
                          {el?.shipping === true ? <ShippingIcon /> : ""}{" "}
                        </span>
                      </p>
                    </div>
                    <div>
                      <Link href={`items/${el?.id}`}>
                        <a>
                          {" "}
                          <p key={el?.id}> {el?.title} </p>{" "}
                        </a>
                      </Link>
                    </div>
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
  );
};
export default Results;
/* (
											  <ListItem key={key}>
												  <Flex flex>
												  	
												  <ImgCard image={el?.picture} alt={el.title} /> 
													  <div>
														  <Flex flex>
															  <div>
																  <p>
																	  <span> {el?.currency === 'ARS' ? '$' : 'USD'}</span>
																	  <span> {String(el?.price).replace(/(.)(?=(\d{3})+$)/g, "$1.")}</span>
																	  <span> {el?.shipping?.free_shipping === true ? <ShippingIcon /> : ''} </span>
																  </p>
															  </div>
															  <div>
																  <p> {el?.state_name} </p>
															  </div>
														  </Flex>
														  <Flex>
															  <p> {el?.items[0].title} </p>
														  </Flex>
			  
													  </div>
												  </Flex>
											  </ListItem>
			  
										  ) */
