import "twin.macro";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { CSSProp } from "styled-components";

const settings: Settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: false,
};

const customSliderStyles: CSSProp = {
  ".slick-slide, .slick-slide img": {
    maxHeight: "65vh",
  },
  // Add some padding on bottom to avoid hiding overflowing img shadow
  ".slick-list": {
    boxSizing: "initial",
    paddingBottom: "2rem",
  },
};

const ProjectShowcase: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div css={customSliderStyles}>
      <Slider tw="mb-16" {...settings}>
        {images.map(image => (
          <img
            tw="block! w-auto! mx-auto rounded shadow-xl object-contain lg:rounded-2xl"
            src={image}
            key={image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectShowcase;
