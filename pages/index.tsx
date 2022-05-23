import {
  SectionBanner,
  SectionGold,
  SectionRecommend,
} from "components/homepage";
import SectionContent from "components/homepage/SectionContent";
import SectionProduct from "components/homepage/SectionProduct";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <SectionBanner />
      <SectionRecommend />
      <SectionGold />
      <SectionProduct />
      <SectionContent />
    </>
  );
};

export default Home;
