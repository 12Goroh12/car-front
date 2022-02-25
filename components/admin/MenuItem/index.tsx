import { observer } from "mobx-react-lite";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { RiAddFill } from "react-icons/ri";
import { WebsiteUrls } from "../../../types/enums";
import { MenuCar, MenuList } from "./style";
import carStore from "../../../store/carStore";
import Link from "next/link";

const MenuItem: FC = () => {
  const router: NextRouter = useRouter();

  const createCar = () => {
    carStore.togglePopup();
    router.push(WebsiteUrls.CREATE_CAR);
  };

  return (
    <MenuCar>
      <MenuList>
        <Link href={WebsiteUrls.NEW_ADN_USED}>
          <a>List cars</a>
        </Link>
        <span>{carStore.cars.length} pc</span>
      </MenuList>
      <MenuList onClick={createCar}>
        <span>Create car</span>
        <RiAddFill />
      </MenuList>
    </MenuCar>
  );
};

export default observer(MenuItem);
