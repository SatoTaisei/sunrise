import { VFC } from "react";
import { MenuTitle } from "@/components/MenuTitle";
import { MenuItem } from "@/components/MenuItem";

import type { Menu } from "@/types/menu";

export const MenuByCategoryBlock: VFC<{ byCategoryList: Menu[] }> = ({
  byCategoryList,
}) => {
  return (
    <div className="mt-16">
      <MenuTitle title={byCategoryList[0].category[0]} />
      <ul>
        {byCategoryList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </div>
  );
};
