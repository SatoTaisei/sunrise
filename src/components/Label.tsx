import { VFC } from "react";

export const Label: VFC<{ category: string }> = ({ category }) => {
  const setBackGroundColor = (category: string) => {
    switch (category) {
      case `日本酒`:
        return `bg-blue-200`;
      case `リキュール`:
        return `bg-emerald-200`;
      case `赤ワイン`:
        return `bg-red-200`;
      case `白ワイン`:
        return `bg-yellow-300`;
      case `スパークリングワイン`:
        return `bg-cyan-200`;
      case `ロゼワイン`:
        return `bg-rose-200`;
      case `焼酎`:
        return `bg-amber-200`;
      default:
        break;
    }
  };

  const setTextColor = (category: string) => {
    switch (category) {
      case `日本酒`:
        return `text-blue-500`;
      case `リキュール`:
        return `text-emerald-500`;
      case `赤ワイン`:
        return `text-red-500`;
      case `白ワイン`:
        return `text-white`;
      case `スパークリングワイン`:
        return `text-cyan-500`;
      case `ロゼワイン`:
        return `text-rose-500`;
      case `焼酎`:
        return `text-amber-900`;
      default:
        break;
    }
  };

  return (
    <div
      className={`${setBackGroundColor(
        category
      )} w-auto rounded-full flex justify-center items-center px-2 mr-1`}
    >
      <span
        className={`${setTextColor(
          category
        )} text-xs font-bold whitespace-nowrap`}
      >
        {category}
      </span>
    </div>
  );
};
