import { VFC } from "react";
import { MenuTitle } from "@/components/MenuTitle";
import { MenuItem } from "@/components/MenuItem";

import type { Menu } from "@/types/menu";

export const MenuByCategoryBlock: VFC<{ byCategoryList: Menu[] }> = ({
  byCategoryList,
}) => {
  // kye:imgを持つメニューを上位に整列
  const sortedWithImgMenuList: Menu[] = [];
  // kye:imgを持つメニューを挿入
  byCategoryList.map((menu) => {
    if (Object.keys(menu).indexOf(`img`) !== -1) {
      sortedWithImgMenuList.push(menu);
    }
  });
  // kye:imgを持たないメニューを挿入
  byCategoryList.map((menu) => {
    if (Object.keys(menu).indexOf(`img`) === -1) {
      sortedWithImgMenuList.push(menu);
    }
  });

  return (
    <div className="mt-16">
      <MenuTitle title={byCategoryList[0].category[0]} />
      <ul>
        {sortedWithImgMenuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </div>
  );
};
