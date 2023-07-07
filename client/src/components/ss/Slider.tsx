import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../../assets/slider1.png";
import imageTwo from "../../assets/slider2.png";
import imageThree from "../../assets/slider3.png";

const MySlider = () => {
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
      <div className="relative overflow-hidden">
        <img
          className="transition-transform duration-300 transform hover:scale-110"
          src={imageOne}
          alt="Slide 1"
        />
      </div>
      <div>
        <img src={imageTwo} alt="Slide 2" />
      </div>
      <div>
        <img src={imageThree} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default MySlider;