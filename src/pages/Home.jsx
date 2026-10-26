import BusinessSolutions from "../features/home/component/BusinessSolutions";
import HomeImage from "../features/home/component/homeImage";
import HowUseApplication from "../features/home/component/howUseApplication";
import WhyChooseTsafi from "../features/home/component/whyChooseTsafi";

const Home = () => {
  return (
    <div>
      <HomeImage />
      <WhyChooseTsafi />
      <HowUseApplication />
      <BusinessSolutions />
    </div>
  );
};
export default Home;
