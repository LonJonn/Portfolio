import "twin.macro";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  adaptiveHeight: true,
};

const ProjectShowcase: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Slider tw="max-w-5xl mb-20 mx-auto" {...settings}>
      {images.map(image => (
        <img tw="maxHeight[65vh] object-scale-down" src={image} key={image} />
      ))}
    </Slider>
  );
};

export default ProjectShowcase;
