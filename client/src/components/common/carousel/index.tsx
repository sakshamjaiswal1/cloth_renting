import { ReactNode, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider, { Settings } from "react-slick";

function Carousel({
  settings,
  children,
  className,
  parentSliderRef,
}: {
  settings?: Settings;
  children: ReactNode;
  className?: string;
  parentSliderRef?: React.RefObject<Slider>;
}) {
  const customSettings = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      ...settings,
    };
  }, [settings]);

  return (
    <Slider ref={parentSliderRef} {...customSettings} className={className}>
      {children}
    </Slider>
  );
}

export default Carousel;
