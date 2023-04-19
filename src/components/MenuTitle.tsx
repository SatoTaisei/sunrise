import { VFC } from 'react';

export const MenuTitle: VFC<{ title: string }> = ({ title }) => {
	const conversionTitle = (title: string) => {
		switch (title) {
			case `ワイン`:
				return `Wine`;
			case `日本酒`:
				return `Sake`;
			case `焼酎`:
				return `Shochu`;
			case `リキュール`:
				return `Liqueur`;
			default:
				break;
		}
	};
	return (
		<div className="relative">
			<span className="inline-block font-extrabold text-8xl text-neutral-100">
				{conversionTitle(title)}
			</span>
			<span className="absolute flex items-center h-24 font-extrabold text-2xl top-0 pt-2 ml-4">
				{conversionTitle(title)}
			</span>
		</div>
	);
};
