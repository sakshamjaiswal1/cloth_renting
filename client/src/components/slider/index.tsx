import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = ({ image1, image2 }: { image1: string; image2: string }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="flex justify-center w-full mx-[200px] ">
        <img
          className="transition-transform duration-300 transform hover:scale-[1.5]"
          src={image1}
          alt="Slide 1"
        />
      </div>
      <div className="flex justify-center w-full mx-[200px]">
        <img
          src={image2}
          alt="Slide 2"
          className="transition-transform duration-300 transform hover:scale-[1.5]"
        />
      </div>
    </Slider>
  );
};

export default MySlider;
