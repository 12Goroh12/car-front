import Link from "next/link";
import { FC } from "react";
import { ICategories } from "../../types/categories";
import { Item } from "../Сategories/style";

interface ICategoryListProps {
  item: ICategories;
  className?: string;
  setIsVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const CategoryList: FC<ICategoryListProps> = ({
  item,
  className,
  setIsVisible,
}) => {
  const notVisible = () => {
    setIsVisible(false);
  };

  return (
    <Link href={item.path} passHref>
      <Item onClick={notVisible} className={className}>
        {item.name}
      </Item>
    </Link>
  );
};

export default CategoryList;
