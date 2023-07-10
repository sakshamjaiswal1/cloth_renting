import "./index.css";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

function ChoiceSection() {
  return (
    <div className="text-white bg-black py-[55px] mt-[25px] mb-[15px]">
      <section className="flex justify-center items-center gap-x-[50px]">
        <div className="flex flex-col items-center">
          <PanToolAltIcon className="h-[37px] w-[37px]" />
          <h4 className="text-center">1. MAKE YOUR CHOICE</h4>
          <p className="text-center">
            Browse through our exclusive collection and pick an <br /> outfit to
            lease with ease.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ChoiceSection;
