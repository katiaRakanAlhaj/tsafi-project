import AboutHero from "@/features/About/aboutHero";
import DiscoverLocaleFavorites from "@/features/About/discoverLocaleFavorites";
import ChooseSurpriseBags from "@/features/About/chooseSurpriseBags";
import BrowseCafe from "../features/About/browseCafe";

const About = () => {
  return (
    <div>
      <AboutHero />
      <DiscoverLocaleFavorites />
      <BrowseCafe />
      <ChooseSurpriseBags />
    </div>
  );
};
export default About;
