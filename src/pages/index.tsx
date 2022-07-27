import { useEffect, useState } from "react";
import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuByCategoryBlock } from "@/components/MenuByCategoryBlock";
import { WelcomePopUp } from "@/components/Modal/WelcomePopUp";

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

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("disp_popup")) {
      sessionStorage.setItem("disp_popup", "on");
      setIsPopUpOpen(true);
    }
  }, [isPopUpOpen]);

  return (
    <>
      <Header />

      <WelcomePopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />

      <main className="w-full min-h-screen my-8 mx-auto">
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
