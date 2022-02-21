import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { ICategories } from "../../types/categories";
import { categories } from "../../utils";
import { Item, List } from "./style";

const Сategories: FC = () => {
  const { pathname }: NextRouter = useRouter();

  return (
    <List>
      {categories.map((item: ICategories) => (
        <Link key={item.id} href={item.path} passHref>
          <Item
            key={item.id}
            className={pathname === item.path ? "2px solid #df0000" : ""}
          >
            {item.name}
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default Сategories;
