import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useServerSideProps = <T extends Object>() => {
  const [product, setProduct] = useState<T>();
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
  return {
    product,
  };
};
