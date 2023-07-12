function ScoopSection() {
  return (
    <section className="py-[10px] px-[10px] flex items-center">
      <div className="flex-1  flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-[13px] font-[400] uppercase tracking-[1px] text-grey">
            NEW ARRIVALS
          </p>
          <h2 className="text-[43px] text-grey font-[500] leading-[1.4]">
            The Latest Scoop
          </h2>
          <h4 className="text-grey text-[17px] leading-[1.67] font-[400]">
            Get Spring ready in the freshest looks of the season
          </h4>
          <button className="hover:opacity-[0.9] text-[15px] cursor-pointer px-[30px] py-[12px] font-[400] leading-[20px] bg-black text-white border-[2px] border-solid  border-white">
            RENT NOW
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://www.thestylease.com/cdn/shop/files/JR2_1544_1080x.jpg?v=1613782346"
          alt=""
        />
      </div>
    </section>
  );
}

export default ScoopSection;

// https://www.thestylease.com/cdn/shop/products/JR2_2692_540x.jpg?v=1556032278
// https://www.thestylease.com/cdn/shop/files/JR2_1544_1080x.jpg?v=1613782346
