import { FC } from "react";
import { RiAddFill } from "react-icons/ri";
import { MenuCar, MenuList } from "./style";

const MenuItem: FC = () => {
  return (
    <MenuCar>
      <MenuList>
        <span>List cars</span> <span>10 pc</span>
      </MenuList>
      <MenuList>
        <span>Create car</span>
        <RiAddFill />
      </MenuList>
    </MenuCar>
  );
};

export default MenuItem;
