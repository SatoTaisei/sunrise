import { VFC } from "react";
import { Label } from "@/components/Label";
import { Modal } from "@/components/Modal";

import type { Menu } from "@/types/menu";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { message, name, category, img, description, tag } = menu;

  return (
    <div className="my-10">
      <div className="flex items-center">
        <Label category={category[0]} />
        {tag &&
          tag.map((tag) => (
            <span key={tag} className="text-xs font-bold text-neutral-300 px-1">
              #{tag}
            </span>
          ))}
      </div>
      <div className="flex items-center">
        <span className="inline-block font-bold text-2xl py-1">{name}</span>
        {img && description && <Modal imgURL={img.url} />}
      </div>
      <p className="text-xs text-neutral-500">{message}</p>
    </div>
  );
};
