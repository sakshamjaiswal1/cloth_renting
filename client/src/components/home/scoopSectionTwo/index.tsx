const ScoopSectionTwo = () => {
  return (
    <section className="py-[10px] px-[10px] flex items-center ">
      <div className="flex-1  flex flex-col items-center">
        <div className="text-center">
          <p className="text-[12.2px]">TREND ALERTS</p>
          <h2 className="text-[36px] text-[black] merriweather-font font-medium leading-1.4 mb-[0.2rem]">
            Derisk You Style Experiment
          </h2>
          <p className="text-[15px] font-normal leading-1.5 mb-[.618em] ">
            Be any version of yourself without burning your pockets
          </p>
          <button className="bg-[#2b2d3c] text-white py-[12px] px-[30px] leading-[20px] ">
            RENT NOW
          </button>
        </div>
        <div className="h-full w-full m-auto text-center">
          <img
            className="h-[200px] m-auto"
            src="https://www.thestylease.com/cdn/shop/products/JR2_2692_900x.jpg?v=1556032278"
            alt=""
          />
          <h4 className="text-[17.1px] font-normal">
            Silver Rectangular Patterned Blazer
          </h4>
          <p className="text-[15px] font-normal leading-1.5 mb-[.618em]">
            Rs. 2800.00
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://www.thestylease.com/cdn/shop/files/JR2_1672_copy.jpg?v=1613782609"
          alt=""
        />
      </div>
    </section>
  );
};

export default ScoopSectionTwo;
