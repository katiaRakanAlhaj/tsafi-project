import { useTranslation } from "react-i18next";
import Bar from "@/features/home/component/Bar";
import BusinessSolutions from "@/features/home/component/BusinessSolutions";
import HomeImage from "@/features/home/component/homeImage";
import HowUseApplication from "@/features/home/component/howUseApplication";
import JoinUs from "@/features/home/component/joinUs";
import WhyChooseTsafi from "@/features/home/component/whyChooseTsafi";
import { useFetchHomePage } from "@/features/home/hook/useFetchHome";
import Loader from "../component/loader/loader";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import MetaHelmet from "../component/metaHelmet/metaHelmet";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const Home = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const pageTitle = isArabic ? "الرئيسية | تصافي" : "Home | TSAFI";

  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();

  if (homePageDataLoading) {
    return <Loader />;
  }
  if (homePageDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <MetaHelmet title={pageTitle} description={pageTitle} />
      <HomeImage homePageData={homePageData} />
      <WhyChooseTsafi homePageData={homePageData} />
      <Bar homePageData={homePageData} />
      <HowUseApplication homePageData={homePageData} />
      <BusinessSolutions homePageData={homePageData} />
      <JoinUs homePageData={homePageData} />
    </div>
  );
};

export default Home;
