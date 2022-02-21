import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import { ICategories } from "../../types/categories";
import { categories } from "../../utils";
import { ItemMenu, List, MediaMenu } from "./style";
import CategoryList from "../CategoryList";

const Сategories: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname }: NextRouter = useRouter();

  const visibleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ItemMenu
        rotate={isVisible}
        src="/images/Vector.svg"
        onClick={visibleMenu}
      />
      {isVisible && (
        <MediaMenu>
          {categories.map((item: ICategories) => (
            <CategoryList key={item.id} item={item} />
          ))}
        </MediaMenu>
      )}
      <List>
        {categories.map((item: ICategories) => (
          <CategoryList
            key={item.id}
            className={pathname === item.path ? "2px solid #df0000" : ""}
            item={item}
          />
        ))}
      </List>
    </>
  );
};

export default Сategories;
