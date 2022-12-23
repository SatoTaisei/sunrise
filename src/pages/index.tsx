import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuByCategoryBlock } from "@/components/MenuByCategoryBlock";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
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

  const getLastUpdatedTime = () => {
    // 各メニューの更新日時を取り出す
    const updatedTime = menuList.map((item) => item.createdAt);
    // 更新日時が新しい順に整列
    const lastUpdatedTime = updatedTime.sort((foo, bar) => {
      return foo > bar ? -1 : 1;
    });
    // タイムスタンプを文字列に最適化
    const optimizedLastUpdatedTime = `${lastUpdatedTime[0]
      // 日付を取り出す
      .slice(5, 10)
      // 時間を取り出す
      .replace("-", "/")} ${lastUpdatedTime[0].slice(11, 16)}`;

    // 最終更新日を返す
    return optimizedLastUpdatedTime;
  };

  return (
    <>
      <Header />

      <main className="w-full min-h-screen my-8 mx-auto">
        <time
          dateTime={getLastUpdatedTime()}
          className="inline-block absolute text-sm text-neutral-300 top-20 right-2 pt-1"
        >
          更新日: {getLastUpdatedTime()}
        </time>
        <div className="w-11/12 md:8/12 lg:w-6/12 mx-auto py-6">
          <h2 className="font-extrabold text-5xl pb-4 pt-32 ml-4">MENU</h2>
          <hr className="w-16 border rounded border-black bg-black ml-5" />
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
