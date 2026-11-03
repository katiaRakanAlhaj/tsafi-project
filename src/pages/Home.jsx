import Bar from "@/features/home/component/Bar";
import BusinessSolutions from "@/features/home/component/BusinessSolutions";
import HomeImage from "@/features/home/component/homeImage";
import HowUseApplication from "@/features/home/component/howUseApplication";
import JoinUs from "@/features/home/component/joinUs";
import WhyChooseTsafi from "@/features/home/component/whyChooseTsafi";
import { useFetchHomePage } from "@/features/home/hook/useFetchHome";

const Home = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  return (
    <div>
      <HomeImage homePageData = {homePageData}/>
      <WhyChooseTsafi homePageData = {homePageData}/>
      <Bar homePageData = {homePageData}/>
      <HowUseApplication homePageData = {homePageData}/>
      <BusinessSolutions homePageData = {homePageData}/>
      <JoinUs homePageData = {homePageData}/>
    </div>
  );
};

export default Home;
