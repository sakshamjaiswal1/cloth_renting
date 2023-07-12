import React from "react";

const ScoopSectionThree = () => {
  return (
    <section className="py-[10px] px-[10px] flex items-center ">
      <div className="flex-1  flex flex-col items-center">
        <div className="text-center">
          <p className="text-[12.2px]">MENS WEAR</p>
          <h2 className="text-[36px] text-[black] merriweather-font font-medium leading-1.4 mb-[0.2rem]">
            Why Should Girls Have All The Fun?
          </h2>
          <p className="text-[15px] font-normal leading-1.5 mb-[.618em] ">
            For the dapper and uber stylish modern man
          </p>
          <button className="bg-[#2b2d3c] text-white py-[12px] px-[30px] leading-[20px] ">
            RENT NOW
          </button>
        </div>
        <div className="flex m-auto h-full w-full">
          <div>
            <img
              className="h-[200px] m-auto"
              src="https://www.thestylease.com/cdn/shop/products/JR2_7400.png?v=1554080731"
              alt=""
            />
            <h4 className="text-[17.1px] font-normal text-center">
              Cream Fully Embroidered Sherwani With Dupatta
            </h4>
            <p className="text-[15px] font-normal leading-1.5 mb-[.618em] text-center">
              Rs. 6500.00
            </p>
          </div>
          <div>
            <img
              className="h-[200px] m-auto"
              src="https://www.thestylease.com/cdn/shop/products/JR2_7099.png?v=1554079960"
              alt=""
            />
            <h4 className="text-[17.1px] font-normal text-center">
              Asymmetric Sherwani With Golden Dhoti Pants
            </h4>
            <p className="text-[15px] font-normal leading-1.5 mb-[.618em] text-center">
              Rs. 99.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://www.thestylease.com/cdn/shop/files/JR2_2385_1296x.jpg?v=1613785658"
          alt=""
        />
      </div>
    </section>
  );
};

export default ScoopSectionThree;
