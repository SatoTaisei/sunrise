import { VFC } from "react";
import { Modal } from "@/components/Modal";

import type { Menu } from "@/types/menu";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { message, name, category, genre, taste, flavor, img, description } =
    menu;

  // tag = [genre, taste, flavor]: string[]
  const tag = [];
  if (genre[0]) tag.push(genre[0]);
  if (taste) {
    if (taste[0]) tag.push(taste[0]);
  }
  if (flavor) {
    if (flavor[0]) tag.push(flavor[0]);
  }

  return (
    <div className="my-8">
      <div className="flex items-center">
        {tag.map((tag, index) => (
          <span key={index} className="text-xs font-bold text-neutral-300 px-1">
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex items-start">
        {img && description ? (
          <Modal
            name={name}
            imgURL={img.url}
            category={category[0]}
            tag={tag}
            description={description}
          />
        ) : (
          <span className="inline-block font-bold text-2xl py-1">{name}</span>
        )}
      </div>
      <p className="text-xs text-neutral-500">{message}</p>
    </div>
  );
};
