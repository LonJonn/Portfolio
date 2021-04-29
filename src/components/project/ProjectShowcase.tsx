import tw from "twin.macro";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import type { ImageType } from "../../types";

SwiperCore.use([Autoplay, Pagination]);

const ProjectShowcase: React.FC<{ images: ImageType[] }> = ({ images }) => {
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
      css={{
        ".swiper-wrapper": tw`items-center`,
        // NextImage wraps in a div, but I want shadows >:( so overwrite styles
        ".swiper-slide > div": tw`overflow-visible!`,
      }}
    >
      {images.map(image => (
        <SwiperSlide
          style={{
            width: (image.width / image.height) * 600,
            maxWidth: "100vw",
          }}
          key={image.src}
        >
          <NextImage
            height={600}
            width={(image.width / image.height) * 600}
            quality={100}
            loading="eager"
            src={image.src}
            alt={`Project Showcase Image ${image.src.split("/").slice(-1)}`}
            tw="rounded-2xl shadow-xl object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectShowcase;
