import { MenuList } from '@/components/pages/MenuList';
import { client } from '@/libs/client';

import type { Menu } from '@/types/menu';
import type { NextPage, GetStaticProps } from 'next';

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
	return <MenuList menuList={menuList} />;
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const data = await client
		.get({
			endpoint: 'menu',
			queries: {
				limit: 100,
			},
		})
		.then((res) => res)
		.catch(() => null);

	return { props: { menuList: data?.contents } };
};
