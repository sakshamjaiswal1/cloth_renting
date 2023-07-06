import Header from "../../Components/header";

function Home() {
  return (
    <div className="">
      <Header className="" />
      <section className="  h-full w-full">
        <div className="h-[1000px] w-full relative -mt-[140px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/JR2_7050.jpg?v=1613782300"
            alt=""
            className="h-[1000px] w-full"
          />
          <section className="absolute bottom-[40px] left-[200px]">
            <h4 className="text-[48px] text-white">
              The future of your <br /> wardrobe
            </h4>
            <div className="flex items-center gap-x-[20px] mt-[20px]">
              <button className="px-[15px] py-[10px] text-[#000] bg-[#fff]  ">
                Rent Womens Wear
              </button>
              <button className="px-[15px] py-[10px] text-[#000] bg-[#fff]  ">
                Rent Mens Wear
              </button>
            </div>
          </section>
        </div>
      </section>
      <section className="flex pt-[20px] pb-[20px] px-[20px] gap-x-[20px]">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/For_Her_1080x.jpg?v=1613782301%22"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/For_Him_1080x.jpg?v=1613782301"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
