import Link from "next/link";
import { VFC } from "react";

import type { Menu } from "@/types/menu";
import { Label } from "@/components/Label";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { id, message, name, category, img, description } = menu;

  return (
    <div key={id} className="my-4">
      <div className="flex items-center">
        <Label category={category[0]} />
        <p className="text-xs text-orange-300">{message}</p>
      </div>
      {img ? (
        <Link href={img.url}>
          <a className="hover:text-sky-500">
            <span className="font-bold text-xl">{name}</span>
          </a>
        </Link>
      ) : (
        <span className="font-bold text-xl">{name}</span>
      )}
    </div>
  );
};
