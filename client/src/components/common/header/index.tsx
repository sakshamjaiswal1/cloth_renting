import ProfileLogo from "../../../assets/home/profile";

import logo from "../../../assets/home/jainLogo.png";
import { useEffect, useState } from "react";
import SearchLogo from "../../../assets/home/searchLogo";
import CartLogo from "../../../assets/home/cartLogo";
import { Link, useLocation } from "react-router-dom";

function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${className} flex items-center justify-between w-full pl-[70px] pr-[30px]  sticky top-0 z-[1] ${
        isScrolled ? "bg-white " : "py-[30px] "
      }  transition-all ease-in-out duration-300  `}
    >
      <div className="w-[206px] h-[80px]">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="h-full w-full" />
        </Link>
      </div>
      <ul
        className={`flex items-center gap-x-[20px] leading-[25px] text-[14px] tracking-[0px] ${
          isScrolled ||
          location.pathname?.split("/")?.[1] === "singleProduct" ||
          location.pathname?.split("/")?.[1] === "blog"
            ? "text-black"
            : "text-white"
        } `}
      >
        <li className="hover:scale-105 hover:opacity-80  transition-all ease-in-out duration-300 ">
          <Link to="/womenClothes">WOMENS WEAR</Link>
        </li>
        <li className="hover:scale-105 hover:opacity-80  transition-all ease-in-out duration-300 ">
          <Link to="/menClothes">MENS WEAR</Link>
        </li>
        <li className="hover:scale-105 hover:opacity-80  transition-all ease-in-out duration-300 ">
          <Link to="/aboutRentCause">RENT FOR CAUSE</Link>
        </li>
        <li className="hover:scale-105 hover:opacity-80  transition-all ease-in-out duration-300 ">
          <Link to="/menClothes">BLOG</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-x-[20px]">
        <li>
          <Link to="/register">
            <ProfileLogo
              className={`h-[30px] w-[30px]  ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
          </Link>
        </li>
        <li>
          <SearchLogo
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </li>
        <li>
          <Link to="/register">
            <CartLogo
              className={`h-[30px] w-[30px]  ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
