import "./index.css";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import ScaleIcon from "@mui/icons-material/Scale";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DoorBackIcon from "@mui/icons-material/DoorBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function ChoiceSection() {
  return (
    <div className="text-white bg-black py-[55px] mt-[25px] mb-[15px]">
      <section className="flex justify-center items-center gap-x-[50px]">
        <div className="flex flex-col items-center">
          <PanToolAltIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center merriweather-font mt-[14px] text-[16.8px] font-[500] leading-[1.3]">
            1. MAKE YOUR CHOICE
          </h4>
          <p className="text-center mt-[18px] text-[15px] font-[400] leading-[1.5]">
            Browse through our exclusive collection and pick an <br /> outfit to
            lease with ease.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ScaleIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center merriweather-font mt-[14px] text-[16.8px] font-[500] leading-[1.3]">
            2. THE DREAM FIT
          </h4>
          <p className="text-center mt-[18px] text-[15px] font-[400] leading-[1.5]">
            Select your size, the preferred duration and the date <br /> of
            delivery.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CheckroomIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center merriweather-font mt-[14px] text-[16.8px] font-[500] leading-[1.3]">
            3. STYLE YOUR LOOK
          </h4>
          <p className="text-center mt-[18px] text-[15px] font-[400] leading-[1.5]">
            Amp up your game with accessories from our <br /> specially curated
            collection to complement your look.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center gap-x-[50px] mt-[25px]">
        <div className="flex flex-col items-center">
          <DoorBackIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center merriweather-font mt-[14px] text-[16.8px] font-[500] leading-[1.3]">
            4. DELIVERY TO YOUR DOORSTEP
          </h4>
          <p className="text-center mt-[18px] text-[15px] font-[400] leading-[1.5]">
            Sit back and relax after check out as we custom fit <br /> the
            outfit to your measurements for a hassle free <br /> experience.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AddAPhotoIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center merriweather-font mt-[14px] text-[16.8px] font-[500] leading-[1.3]">
            5. LOOK PICTURE PERFECT
          </h4>
          <p className="text-center mt-[18px] text-[15px] font-[400] leading-[1.5]">
            Own your look and turn heads wherever you go <br />. Don't worry,
            the pick up is on us!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ChoiceSection;
