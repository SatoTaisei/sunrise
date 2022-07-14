import { VFC } from "react";

export const Label: VFC<{ category: string }> = ({ category }) => {
  return (
    <div className="w-16">
      <div className="bg-blue-100 w-auto flex justify-center items-center mr-2 mt-2">
        <span className="text-blue-500 text-xs font-bold whitespace-nowrap`">
          {category}
        </span>
      </div>
    </div>
  );
};
