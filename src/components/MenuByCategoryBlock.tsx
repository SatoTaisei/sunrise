import { VFC } from "react";
import { MenuTitle } from "@/components/MenuTitle";
import { MenuItem } from "@/components/MenuItem";

import type { Menu } from "@/types/menu";

export const MenuByCategoryBlock: VFC<{ menuList: Menu[] }> = ({
  menuList,
}) => {
  return (
    <div className="mt-16">
      <MenuTitle title={menuList[0].category[0]} />
      <ul>
        {menuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </div>
  );
};
