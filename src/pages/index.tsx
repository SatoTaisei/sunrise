import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuItem } from "@/components/MenuItem";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen my-8 mx-auto">
        <p className="text-center font-bold text-xl">- MENU -</p>
        <ul className="w-10/12 md:8/12 lg:w-6/12 mx-auto">
          {menuList.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </ul>
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
    })
    .then((res) => res)
    .catch(() => null);

  return { props: { menuList: data.contents } };
};
