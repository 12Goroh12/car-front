import { NextRouter, useRouter } from "next/router";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ICategories } from "../../types/categories";
import { categories } from "../../utils";
import { ItemMenu, List, MediaMenu } from "./style";
import CategoryList from "../CategoryList";

const Сategories: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname }: NextRouter = useRouter();
  const categoriesRef = useRef<HTMLDivElement>(null);

  const visibleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(categoriesRef.current)) {
        setIsVisible(false);
      }
    },
    [setIsVisible]
  );

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={categoriesRef}>
      <ItemMenu
        visible={isVisible}
        src="/images/Vector.svg"
        onClick={visibleMenu}
      />
      {isVisible && (
        <MediaMenu>
          {categories.map((item: ICategories) => (
            <CategoryList
              setIsVisible={setIsVisible}
              key={item.id}
              item={item}
            />
          ))}
        </MediaMenu>
      )}
      <List>
        {categories.map((item: ICategories) => (
          <CategoryList
            setIsVisible={setIsVisible}
            key={item.id}
            className={pathname === item.path ? "2px solid #df0000" : ""}
            item={item}
          />
        ))}
      </List>
    </div>
  );
};

export default Сategories;
