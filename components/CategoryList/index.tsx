import Link from "next/link";
import { FC } from "react";
import { ICategories } from "../../types/categories";
import { Item } from "../Сategories/style";

interface ICategoryListProps {
  item: ICategories;
  className?: string;
}

const CategoryList: FC<ICategoryListProps> = ({ item, className }) => (
  <Link href={item.path} passHref>
    <Item className={className}>{item.name}</Item>
  </Link>
);

export default CategoryList;
