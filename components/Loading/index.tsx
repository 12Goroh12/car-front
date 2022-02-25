import { FC } from "react";
import ReactLoading from "react-loading";
import { Loaded } from "./style";

const Loading: FC = () => (
  <Loaded>
    <ReactLoading type="spin" color="#df0000" height={150} width={150} />
  </Loaded>
);

export default Loading;
