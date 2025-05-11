import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-[1300px] px-6">
      <div className="flex items-center justify-between bg-black border border-orange px-6 py-4 rounded-full shadow-lg w-full">
        {/* Logo */}
        <NavbarLogo />

        {/* Navbar Links (Responsive) */}
        <div className={`lg:flex items-center gap-6 ${menuOpen ? "block absolute top-[100%] left-0 w-full bg-black shadow-md rounded-md p-4" : "hidden"} lg:block lg:relative lg:w-auto lg:bg-transparent lg:shadow-none`}>
          <NavbarLinks />
        </div>

        {/* Buttons */}
        <NavbarBtn />

        {/* Mobile Menu Toggler */}
        <div className="lg:hidden flex items-center justify-center p-3 bg-black border border-orange rounded-full cursor-pointer">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
