import ProfileLogo from "../../../assets/home/profile";

import logo from "../../../assets/home/jainLogo.png";
import { useEffect, useState } from "react";
import SearchLogo from "../../../assets/home/searchLogo";
import CartLogo from "../../../assets/home/cartLogo";

function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
        isScrolled ? "bg-white " : "py-[30px]"
      }  transition-all ease-in-out duration-300  `}
    >
      <div className="w-[206px] h-[80px]">
        <img src={logo} alt="" className="h-full w-full" />
      </div>
      <ul
        className={`flex items-center gap-x-[20px] leading-[25px] text-[14px] tracking-[0px] ${
          isScrolled ? "text-black" : "text-white"
        } `}
      >
        <li>
          <a href="/womenClothes">WOMENS WEAR </a> <span className={``}></span>
        </li>
        <li>
          <a href="/menClothes">MENS WEAR</a>
        </li>
        <li>
          {" "}
          <a href="/aboutRentCause">RENT FOR CAUSE</a>
        </li>
        <li>
          {" "}
          <a href="">BLOG</a>
        </li>
      </ul>
      <ul className="flex items-center gap-x-[20px]">
        <li>
          {" "}
          <ProfileLogo
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </li>
        <li>
          {" "}
          <SearchLogo
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </li>
        <li>
          {" "}
          <CartLogo
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
