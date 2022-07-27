import { VFC } from "react";
import { MenuItemDetailModal } from "@/components/MenuItemDetailModal";

import type { Menu } from "@/types/menu";

export const MenuItem: VFC<{ menu: Menu }> = ({ menu }) => {
  const { message, name, genre, taste, flavor, img, description } = menu;

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
    <div className="flex items-center my-10">
      {/* MenuItemWithModalLink */}
      {img ? (
        <MenuItemDetailModal
          name={name}
          imgURL={img.url}
          tag={tag}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          message={message!}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          description={description!}
        />
      ) : (
        <div className="ml-4">
          {/* MenuItemWithoutImg */}
          <div className="flex items-center">
            {tag.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-bold text-rose-500 px-1"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-start">
            <span className="inline-block font-bold text-xl py-1">{name}</span>
          </div>
          <p className="text-xs text-neutral-500">{message}</p>
        </div>
      )}
    </div>
  );
};
