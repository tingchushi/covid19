import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar";
// import Footer1 from "../components/Footer1";

function Layout() {
  return (
    <>
      <Navbar1 />
      <Outlet />
      {/* <Footer1 /> */}
    </>
  );
}

export default Layout;
