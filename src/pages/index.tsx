import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuItem } from "@/components/MenuItem";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";
import { MenuTitle } from "@/components/MenuTitle";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
  return (
    <>
      <Header />

      <main className="w-full min-h-screen my-8 mx-auto">
        <div className="w-10/12 md:8/12 lg:w-6/12 mx-auto py-6">
          <h2 className="font-extrabold text-5xl py-4">MENU</h2>
          <MenuTitle title={"Wine"} />
          <ul>
            {menuList.map((menu) => (
              <MenuItem key={menu.id} menu={menu} />
            ))}
          </ul>
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
