import {
  SectionBanner,
  SectionContent,
  SectionGold,
  SectionIntro,
  SectionProduct,
  SectionRecommend,
} from "components/homepage";
import { HomeLayout } from "components/layouts/HomeLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      {/* <SectionBanner /> */}
      <SectionIntro />
      <SectionRecommend />
      <SectionGold />
      <SectionProduct />
      <SectionContent />
    </HomeLayout>
  );
};

export default Home;
