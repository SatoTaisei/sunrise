import type { Menu } from '@/types/menu';

const HOURS_PER_DAY = 24;

export const getLastUpdatedTime = (menuList: Menu[]) => {
	// 各メニューの更新日時を取り出す
	const updatedTime = menuList.map((item: Menu) => item.revisedAt);

	// 更新日時が新しい順に整列
	const lastUpdatedTime = updatedTime.sort((foo: string, bar: string) => {
		return foo > bar ? -1 : 1;
	});

	// タイムスタンプを文字列に最適化
	// 2023-04-19T03:01:29.356Z -> 2023/04/19 12:01
	const optimizedLastUpdatedTime = `
			${lastUpdatedTime[0].slice(0, 8).replace(/-/g, '/')}${
		Number(lastUpdatedTime[0].slice(11, 13)) + 9 < HOURS_PER_DAY
			? lastUpdatedTime[0].slice(8, 10)
			: Number(lastUpdatedTime[0].slice(8, 10)) + 1
	}
			${
				Number(lastUpdatedTime[0].slice(11, 13)) + 9 < HOURS_PER_DAY
					? Number(lastUpdatedTime[0].slice(11, 13)) + 9
					: Number(lastUpdatedTime[0].slice(11, 13)) + 9 - HOURS_PER_DAY
			}
			${lastUpdatedTime[0].slice(13, 16)}
		`;

	// 最終更新日を返す
	return optimizedLastUpdatedTime;
};
