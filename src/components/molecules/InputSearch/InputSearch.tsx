import { ChangeEvent, FC, useState } from "react";
import Input from "./../../atoms/input/";
import { SearchButton } from "./../../atoms/button/index";
import { useRouter } from "next/router";
export const InputSearch: FC = () => {
  const [state, setState] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const router = useRouter();
  const uno = () => {
    router.push({
      pathname: "/items",
      query: { search: state },
    });
  };
  return (
    <>
      <Input
        placeholder="Nunca dejes de buscar"
        type="text"
        name="as_search"
        onChange={getValue}
      />
      <button type="button" onClick={uno}>
        {" "}
        boton{" "}
      </button>

      <SearchButton href={`/items?search=${state}`}> boton </SearchButton>
    </>
  );
};
export default InputSearch;
