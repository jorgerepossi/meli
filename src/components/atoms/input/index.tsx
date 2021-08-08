import { ChangeEvent, FC, useState } from "react";
import Button from "../button";
import { useRouter } from "next/router";
interface Props {}

export const Input: FC<Props> = () => {
  const router = useRouter();
  const [state, setState] = useState("");

  const getValue = (e: ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);

  const sendSearch = () => {
    router.push(`/items/search=${state}`);
    //console.log(state)
    //blabla?search=`${params.algo}`
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nunca dejes de buscar "
        onChange={getValue}
      />
      <Button onClick={sendSearch} />
    </>
  );
};
export default Input;
