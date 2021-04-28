import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Pagination]);

const ProjectShowcase: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      loop
      autoplay
      pagination={{ clickable: true }}
      slidesPerView="auto"
      centeredSlides
      grabCursor
      tw="mb-16 pb-16 pt-4"
      css={{ ".swiper-wrapper": tw`items-center` }}
    >
      {images.map(image => (
        <SwiperSlide style={{ width: "fit-content" }} key={image}>
          <img
            css={{ maxHeight: "clamp(400px, 50vh, 600px)", maxWidth: "100vw" }}
            tw="rounded-2xl shadow-xl object-contain"
            src={image}
            alt={`Project Showcase Image ${image.split("/").slice(-1)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectShowcase;
