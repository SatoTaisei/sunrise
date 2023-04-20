import { VFC } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MenuByCategoryBlock } from '@/components/MenuByCategoryBlock';

import { getLastUpdatedTime } from './MenuList.hook';

import type { Menu } from '@/types/menu';

type Props = {
	menuList: Menu[];
};

export const MenuList: VFC<Props> = ({ menuList }) => {
	// TODO: hooksに切り出す
	const categoryList = [`ワイン`, `日本酒`, `焼酎`, `リキュール`];
	const onlyCategoryArray = menuList.map((menu) => menu.category[0]);

	// 整列後の配列を用意
	const sortedByCategoryList: Menu[][] = [];

	// カテゴリー別で整列
	categoryList.map((category) => {
		sortedByCategoryList.push(
			onlyCategoryArray.reduce((byCategoryList: Menu[], item, index) => {
				if (item === category) {
					byCategoryList.push(menuList[index]);
				}
				return byCategoryList;
			}, [])
		);
	});

	return (
		<>
			<Header />

			<main className="w-full min-h-screen my-8 mx-auto">
				<div className="w-11/12 md:8/12 lg:w-6/12 mx-auto py-6">
					<h2 className="font-extrabold text-5xl pb-4 pt-32 ml-4">MENU</h2>
					<hr className="w-16 border rounded border-black bg-black ml-5" />
					{sortedByCategoryList.map((byCategoryList, index) => (
						<MenuByCategoryBlock key={index} byCategoryList={byCategoryList} />
					))}
				</div>
			</main>

			<time
				dateTime={getLastUpdatedTime(menuList)}
				className="block text-sm text-neutral-300 text-center py-2"
			>
				{getLastUpdatedTime(menuList)} &#x21BA;
			</time>
			<Footer />
		</>
	);
};
