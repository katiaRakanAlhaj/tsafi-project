import Bar from "@/features/home/component/Bar";
import BusinessSolutions from "@/features/home/component/BusinessSolutions";
import HomeImage from "@/features/home/component/homeImage";
import HowUseApplication from "@/features/home/component/howUseApplication";
import JoinUs from "@/features/home/component/joinUs";
import WhyChooseTsafi from "@/features/home/component/whyChooseTsafi";

const Home = () => {
  return (
    <div>
      <HomeImage />
      <WhyChooseTsafi />
      <Bar />
      <HowUseApplication />
      <BusinessSolutions />
      <JoinUs />
    </div>
  );
};

export default Home;
