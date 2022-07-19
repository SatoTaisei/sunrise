import { VFC } from "react";

export const MenuTitle: VFC<{ title: string }> = ({ title = "Wine" }) => {
  return (
    <div className="relative">
      <span className="font-extrabold text-9xl text-neutral-100">{title}</span>
      <span className="absolute h-32 font-extrabold text-3xl leading-9 py-14 left-0">
        {title}
      </span>
    </div>
  );
};
