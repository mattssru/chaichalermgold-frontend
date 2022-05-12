import { SectionBanner, SectionGold } from "components/homepage";
import { HomeLayout } from "components/layouts/HomeLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <SectionBanner />
      <SectionGold />
    </HomeLayout>
  );
};

export default Home;
