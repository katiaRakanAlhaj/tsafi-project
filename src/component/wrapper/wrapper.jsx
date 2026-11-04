import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./footer";
import { useFetchFooter } from "./hook/useFetchFooter";

function Wrapper() {
  const { data: footerData } = useFetchFooter();
  return (
    <div className="size-full relative">
      {/* <ScrollToTop /> */}
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className="lg:hidden md:block">
        <NavbarMobile />
      </div>
      <div className="lg:hidden md:block">{/* <NavbarMobile /> */}</div>
      {/* This is where your Home component should render */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer footerData={footerData?.data} />
    </div>
  );
}

export default Wrapper;
