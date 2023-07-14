import cart from "../../../assets/home/cart.svg";
import Profile from "../../../assets/home/profile";
import search from "../../../assets/home/search.svg";
import logo from "../../../assets/home/jainLogo.png";
import { useEffect, useState } from "react";

function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    console.log(window.scrollY);
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
      className={`${className} flex items-center justify-between w-full pl-[70px] pr-[30px] py-[30px] sticky top-0 z-[1] ${
        isScrolled ? "bg-white" : ""
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
          <Profile
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </li>
        <li>
          {" "}
          <img
            src={search}
            alt=""
            className={`h-[30px] w-[30px]  ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />{" "}
        </li>
        <li>
          {" "}
          <img
            src={cart}
            alt=""
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
