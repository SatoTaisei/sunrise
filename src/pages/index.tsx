import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuCategoryBlock } from "@/components/MenuCategoryBlock";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
  const categoryList = [`赤ワイン`, `日本酒`, `焼酎`, `リキュール`];
  const onlyCategoryArray = menuList.map((menu) => menu.category[0]);
  const sortedMenuList: Menu[][] = [];

  categoryList.map((category) => {
    sortedMenuList.push(
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
        <div className="w-10/12 md:8/12 lg:w-6/12 mx-auto py-6">
          <h2 className="font-extrabold text-5xl pb-4 mt-10">MENU</h2>
          <hr className="w-12 border border-black bg-black ml-1" />

          {/* TODO: MenuTitleとMenuListを一緒にしないと... */}
          {sortedMenuList.map((menuList, index) => (
            <MenuCategoryBlock key={index} menuList={menuList} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Home;

// TODO: MenuListへ移管
export const getStaticProps: GetStaticProps = async () => {
  const data = await client
    .get({
      endpoint: "menu",
      queries: {
        limit: 100,
      },
    })
    .then((res) => res)
    .catch(() => null);

  return { props: { menuList: data.contents } };
};
