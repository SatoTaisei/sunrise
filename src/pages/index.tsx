import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuByCategoryBlock } from "@/components/MenuByCategoryBlock";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
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

  console.log(sortedByCategoryList);

  return (
    <>
      <Header />

      <main className="w-full min-h-screen my-8 mx-auto">
        <div className="w-10/12 md:8/12 lg:w-6/12 mx-auto py-6">
          <h2 className="font-extrabold text-5xl pb-4 mt-10">MENU</h2>
          <hr className="w-12 border border-black bg-black ml-1" />
          {sortedByCategoryList.map((byCategoryList, index) => (
            <MenuByCategoryBlock key={index} byCategoryList={byCategoryList} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Home;

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
