import React from "react";
import rentCauseData from "./data.js";

const AboutRentCause = () => {
  return (
    <div className="border border-red.300 h-full w-full">
      <div className="w-[65%] m-auto">
        <img
          className="w-full h-[200px]"
          src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/CSR_Banner_3b504e02-7545-4770-84ca-57a37dfb8c8b.jpg?v=1552726927"
          alt=""
        />
        <div className="py-[2rem]">
          <h1 className="text-[1.7rem] text-center">About Rent For A Cause</h1>
          <p className="text-center pt-[1rem]">
            We, at The Stylease, have always been firm believers of fashion for
            all. But somewhere in the midst of bringing luxury designers to
            every girl next door, we forget that there are those in the world
            who don’t even have the luxury of comfortable clothing.
          </p>
          <p className="text-center pt-[1rem]">
            So here we are, pushing the boundaries to believe in clothing for
            all; and we’d like your support in our initiative to help those in
            need to be able to lead a deservedly comfortable life.
          </p>
          <p className="text-center pt-[0.6rem]">
            Browse through our display of an exquisite collection of outfits
            available to rent for a cause as the proceeds from these outfits
            will be shared with our NGO partners.
          </p>
        </div>
        <img
          className="w-full h-[200px] my-[2rem]"
          src="https://cdn.shopify.com/s/files/1/0086/9177/7632/files/CSR_How_It_Works_Banner_White_3c31ab73-2e72-4a77-a5bb-abde9f35eb91.jpg?v=1553583392"
          alt=""
        />
        <div className="grid grid-cols-2 gap-[1rem]">
          {rentCauseData.map((items: any) => (
            <div key={items.id}>
              <a target="blank" href={items.link}>
                <img className="cursor-pointer" src={items.img} alt="" />
              </a>
              <h1 className="text-center text-[1.7rem]">{items?.title}</h1>
              <p className="text-center py-[1rem]">{items?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutRentCause;
