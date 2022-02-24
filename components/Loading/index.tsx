import { FC } from "react";
import ReactLoading from "react-loading";

const Loading: FC = () => (
  <ReactLoading type="spin" color="#df0000" height={150} width={150} />
);

export default Loading;
