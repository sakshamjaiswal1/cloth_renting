import React from "react";

const ImageSection = () => {
  return (
    <div className="flex justify-between h-full w-full ">
      {/* first section of flex */}
      <div className="w-[60%]">
        {/* <div> */}
        {/* first two image container */}
        <div className="flex w-full justify-evenly m-auto">
          <div className="relative w-[60%]">
            <img
              src="https://www.thestylease.com/cdn/shop/files/DSC9901clr_1296x.jpg?v=1613782346"
              alt="Your Image"
              className="w-full h-[250px] object-cover"
            />
            <div className="absolute bottom-[10px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 text-white p-4">
              <h2 className="text-[27.6px] font-bold text-center merriweather-font">
                The Cocktail Collection
              </h2>
            </div>
          </div>

          <div className="relative w-[30%]">
            <img
              src="https://www.thestylease.com/cdn/shop/collections/Stylease_Exclusive_708x500_268714bb-f698-417d-b858-7d4329b77256_1512x.jpg?v=1554280308"
              alt="Your Image"
              className="w-full  h-[250px] object-cover"
            />
            <div className="absolute bottom-[10px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 text-white p-4">
              <h2 className="text-[27.6px] font-bold text-center merriweather-font">
                Top Rated{" "}
              </h2>
            </div>
          </div>
        </div>

        {/* second two image container */}
        <div className="flex w-full  justify-evenly py-[1rem]">
          <div className="relative w-[30%]">
            <img
              src="https://www.thestylease.com/cdn/shop/files/JR2_3905-2_900x.jpg?v=1613782347"
              alt="Your Image"
              className="w-full h-[250px] object-cover"
            />
            <div className="absolute bottom-[10px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 text-white ">
              <h2 className="text-[27.6px] font-bold text-center merriweather-font">
                Stylease Exclusive{" "}
              </h2>
            </div>
          </div>
          <div className="relative w-[60%]">
            <img
              src="https://www.thestylease.com/cdn/shop/collections/JR2_6137_1512x.jpg?v=1551872331"
              alt="Your Image"
              className="w-full  h-[250px] object-cover"
            />
            <div className="absolute bottom-[10px] left-[120px] transform -translate-x-1/2 -translate-y-1/2 text-white p-4">
              <h2 className="text-[27.6px] font-bold text-center merriweather-font">
                The Party Edit
              </h2>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/*second section of flex */}
      <div className="relative w-[40%]">
        <img
          src="https://www.thestylease.com/cdn/shop/files/JR2_7999_720x.jpg?v=1613782346"
          alt="Your Image"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute bottom-[20px] left-[100px] transform -translate-x-1/2 -translate-y-1/2 text-white ">
          <h2 className="text-[27.6px] font-bold text-center merriweather-font">
            Mens Wear
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
