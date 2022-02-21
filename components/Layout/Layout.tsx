import { FC, ReactNode } from "react";
import { Wrapper } from "./style";
import { observer } from "mobx-react-lite";
import Navbar from "../Navbar";
import carStore from "../../store/carStore";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const popupHide = () => {
    carStore.hidePopup();
  };

  return (
    <>
      <Navbar />
      <Wrapper onClick={popupHide}>{children}</Wrapper>
    </>
  );
};

export default observer(Layout);
