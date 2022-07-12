import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="w-full h-16 bg-sky-500 flex items-center text-3xl pl-4">
      <h1 className="text-3xl font-bold text-orange-300">Sunrise</h1>
    </header>
  );
};
