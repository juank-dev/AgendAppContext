import { MenuOptions } from "../../constants/MenuItems";
import { ItemMenu } from "./components/ItemMenu";
import { MenuWraper } from "./styles";
import React, { useEffect } from "react";
import { useTitlePage } from "../../contexts/TitleContext";

export const Menu = ({ pathname }) => {
  const { setTitleMenu } = useTitlePage();

  useEffect(() => {
    let filterMenu = MenuOptions.filter((el) => el.path === pathname);
    setTitleMenu(filterMenu[0].label);
  }, [pathname]);
  return (
    <MenuWraper>
      {MenuOptions.map((item, i) => (
        <ItemMenu active={item.path === pathname} key={i} {...item} />
      ))}
    </MenuWraper>
  );
};
