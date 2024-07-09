import icon from "../assets/old barrel.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import ham from "../assets/Ham.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className=" mulish-font bg-[#FCF8F3]">
      <div className="hidden laptop:block">
        <div className=" flex justify-between navbar">
          <Link to="/">
            <img src={icon} alt="" />
          </Link>
          <div className=" ">
            <div className="nav-flex">
              <Link to="/">Wine</Link>

              <Link to="/">SPIRIT</Link>
              <Link to="/">BEERS</Link>
              <Link to="/">BARREL PICKS</Link>
            </div>
          </div>
          <div className="user-flex">
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
            <Link to="/">
              <img src={user} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className=" flex justify-between items-center py-2 px-6 bg-[#FFF6E9] w-full">
          <div className="flex items-center gap-[40px]">
            <img className="w-[18px] h-[18px]" src={ham} alt="" />
            <Link to="/">
              <img className="" src={icon} alt="" />
            </Link>
          </div>

          <div className="user-flex">
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
            <Link to="/">
              <img src={user} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
