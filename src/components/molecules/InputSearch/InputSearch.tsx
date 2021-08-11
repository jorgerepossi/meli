import { ChangeEvent, FC, useState } from "react";
import Flex from "../../atoms/flex";
import SearchIcon from "../../atoms/searchIcon";
import { SearchButton } from "../../atoms/button/index";
import Input from "../../atoms/input";

export const InputSearch: FC = () => {
  const [state, setState] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div style={{ flex: 1 }}>
      <Flex flex>
        <Input
          placeholder="Nunca dejes de buscar"
          type="text"
          name="as_search"
          onChange={getValue}
        />
        <SearchButton href={`/items?search=${state}`}>
          <SearchIcon />
        </SearchButton>
      </Flex>
    </div>
  );
};
export default InputSearch;
