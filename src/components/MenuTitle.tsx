import { VFC } from "react";

export const MenuTitle: VFC<{ title: string }> = ({ title = "Wine" }) => {
  return (
    <div className="relative mt-10">
      <span className="inline-block font-extrabold text-9xl text-neutral-100">
        {title}
      </span>
      <span className="absolute flex items-center h-32 font-extrabold text-3xl top-0">
        {title}
      </span>
    </div>
  );
};
