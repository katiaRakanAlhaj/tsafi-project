import { useTranslation } from "react-i18next";
import AboutHero from "@/features/About/component/aboutHero";
import DiscoverLocaleFavorites from "@/features/About/component/discoverLocaleFavorites";
import ChooseSurpriseBags from "@/features/About/component/chooseSurpriseBags";
import BrowseCafe from "@/features/About/component/browseCafe";
import { useFetchAboutPage } from "@/features/About/hook/useFetchAbout";
import Loader from "@/component/loader/loader";
import ScrollToTop from "@/component/ScrollToTop/ScrollToTop";
import MetaHelmet from "../component/metaHelmet/metaHelmet";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const About = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const pageTitle = isArabic ? "من نحن | تصافي" : "About | TSAFI";

  const {
    data: aboutPageData,
    isLoading: aboutPageDataLoading,
    error: aboutPageDataError,
  } = useFetchAboutPage();

  if (aboutPageDataLoading) {
    return <Loader />;
  }
  if (aboutPageDataError) {
    return <ErrorMessageNetwork />;
  }

  return (
    <div>
      <ScrollToTop />
      <MetaHelmet title={pageTitle} description={pageTitle} />
      <AboutHero aboutPageData={aboutPageData} />
      <DiscoverLocaleFavorites aboutPageData={aboutPageData} />
      <BrowseCafe aboutPageData={aboutPageData} />
      <ChooseSurpriseBags aboutPageData={aboutPageData} />
    </div>
  );
};

export default About;
