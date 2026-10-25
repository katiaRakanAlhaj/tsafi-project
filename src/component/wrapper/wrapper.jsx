import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./footer";

function Wrapper() {
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
      <Footer />
    </div>
  );
}

export default Wrapper;
