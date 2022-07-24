import { VFC } from "react";

export const MenuTitle: VFC<{ title: string }> = ({ title = "Wine" }) => {
  return (
    <div className="relative mt-10">
      <span className="inline-block font-extrabold text-8xl text-neutral-100">
        {title}
      </span>
      <span className="absolute flex items-center h-24 font-extrabold text-2xl top-0">
        {title}
      </span>
    </div>
  );
};
