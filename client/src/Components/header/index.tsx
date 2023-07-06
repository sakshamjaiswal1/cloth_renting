import cart from "../../Assets/home/cart.svg";
import Profile from "../../Assets/home/profile";
import search from "../../Assets/home/search.svg";

function Header({ className }: { className?: string }) {
  return (
    <header
      className={`${className} flex items-center justify-between w-full pl-[70px] pr-[30px] py-[30px] sticky top-0 z-[1]`}
    >
      <div className="w-[106px] h-[80px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/Stylease_Final_Logo_1_c463ebee-2285-409d-ad68-9a4d4696c79f_500x.png?v=1613785028"
          alt=""
          className="h-full w-full"
        />
      </div>
      <ul className="flex items-center gap-x-[20px] leading-[25px] text-[14px] tracking-[0px] text-white">
        <li>
          <a href="">WOMENS WEAR </a> <span className={``}></span>
        </li>
        <li>
          <a href="">MENS WEAR</a>
        </li>
        <li>
          {" "}
          <a href="">RENT FOR CAUSE</a>
        </li>
        <li>
          {" "}
          <a href="">BLOG</a>
        </li>
      </ul>
      <ul className="flex items-center gap-x-[20px]">
        <li>
          {" "}
          <Profile className="h-[30px] w-[30px]" />
        </li>
        <li>
          {" "}
          <img src={search} alt="" className="h-[30px] w-[30px]" />{" "}
        </li>
        <li>
          {" "}
          <img src={cart} alt="" className="h-[30px] w-[30px]" />{" "}
        </li>
      </ul>
    </header>
  );
}

export default Header;
