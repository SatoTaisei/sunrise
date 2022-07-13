import { VFC } from "react";

import type { Menu } from "@/types/menu";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { id, message, name, category } = menu;

  return (
    <div key={id} className="my-4">
      <p className="text-sm text-orange-300 ml-9">{message}</p>
      <div className="flex items-start">
        <div className="w-7 h-7 bg-sky-500  rounded-full flex justify-center items-center mr-2 mt-1">
          <span className="text-sm text-white font-bold whitespace-nowrap scale-x-50">
            {category}
          </span>
        </div>
        <span className="font-bold text-2xl">{name}</span>
      </div>
    </div>
  );
};
