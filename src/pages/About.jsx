import AboutHero from "@/features/About/component/aboutHero";
import DiscoverLocaleFavorites from "@/features/About/component/discoverLocaleFavorites";
import ChooseSurpriseBags from "@/features/About/component/chooseSurpriseBags";
import BrowseCafe from "@/features/About/component/browseCafe";
import { useFetchAboutPage } from "@/features/About/hook/useFetchAbout";

const About = () => {
  const { data: aboutPageData ,isLoading:aboutPageDataLoading , error:aboutPageDataError} = useFetchAboutPage();
  return (
    <div>
      <AboutHero aboutPageData = {aboutPageData}/>
      <DiscoverLocaleFavorites aboutPageData = {aboutPageData}/>
      <BrowseCafe aboutPageData = {aboutPageData}/>
      <ChooseSurpriseBags aboutPageData = {aboutPageData}/>
    </div>
  );
};
export default About;
