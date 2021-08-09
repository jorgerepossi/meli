import { ChangeEvent, FC, useState } from "react";
import Input from "./../../atoms/input/";
import { SearchButton } from "./../../atoms/button/index";
import SearchIcon from "../../atoms/searchIcon";

export const InputSearch: FC = () => {
  const [state, setState] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <>
      <Input
        placeholder="Nunca dejes de buscar"
        type="text"
        name="as_search"
        onChange={getValue}
      />

      <SearchButton href={`/items?search=${state}`}>
        <SearchIcon />
      </SearchButton>
    </>
  );
};
export default InputSearch;
