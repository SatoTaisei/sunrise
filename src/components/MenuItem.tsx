import Link from "next/link";
import { VFC } from "react";

import type { Menu } from "@/types/menu";
import { Label } from "@/components/Label";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { id, message, name, category, img, description } = menu;

  return (
    <div key={id} className="my-6">
      <div className="flex items-center">
        <Label category={category[0]} />
      </div>
      {img && description ? (
        <Link href={img.url}>
          <a className="hover:text-sky-500">
            <span className="block font-bold text-xl py-1">{name}</span>
          </a>
        </Link>
      ) : (
        <span className="block font-bold text-xl py-1">{name}</span>
      )}
      <p className="text-xs text-neutral-500">{message}</p>
    </div>
  );
};
