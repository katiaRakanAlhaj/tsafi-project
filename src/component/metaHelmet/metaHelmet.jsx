import { Helmet } from "react-helmet-async";
import logoRaw from "../../assets/images/TSAFILOGO.svg?raw";

const PRIMARY = "#0c6766";

// Recolor the SVG: replace fill attributes, fill in style="", and set a default fill on the root
const coloredLogo = logoRaw
  .replace(/fill="(?!none)[^"]*"/g, `fill="${PRIMARY}"`)
  .replace(/fill:\s*(?!none)[^;"]+/g, `fill:${PRIMARY}`)
  .replace(/<svg(?![^>]*\sfill=)/, `<svg fill="${PRIMARY}"`);

const logoHref = `data:image/svg+xml,${encodeURIComponent(coloredLogo)}`;

const MetaHelmet = ({ title, description }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="icon" href={logoHref} type="image/svg+xml" />
    </Helmet>
  );
};

export default MetaHelmet;