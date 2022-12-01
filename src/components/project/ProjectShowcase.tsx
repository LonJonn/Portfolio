import tw from "twin.macro";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import type { ImageType } from "../../types";
import { useEffect } from "react";

SwiperCore.use([Autoplay, Pagination]);

const ProjectShowcase: React.FC<{ images: ImageType[] }> = ({ images }) => {
  // Fix to prevent carousel height "jumping" while the images are loading
  useEffect(function setupCarouselHeightFix() {
    const firstImageEl = document.querySelector<HTMLImageElement>(".swiper-slide img");
    const swiperWrapperEl = document.querySelector<HTMLDivElement>(".swiper-wrapper");

    firstImageEl.addEventListener("load", function resizeCarousel() {
      const height = firstImageEl.getBoundingClientRect().height;
      swiperWrapperEl.style.height = height + "px";
    });
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      loop
      autoplay
      pagination={{ clickable: true }}
      slidesPerView="auto"
      centeredSlides
      grabCursor
      autoHeight
      tw="mb-16 pb-16 pt-4"
      css={{
        ".swiper-wrapper": tw`items-center`,
        // NextImage wraps in a div, but I want shadows >:( so overwrite styles
        ".swiper-slide > div": tw`overflow-visible!`,
      }}
    >
      {images.map((image) => (
        <SwiperSlide
          style={{
            width: (image.width / image.height) * 600,
            maxWidth: "100vw",
          }}
          key={image.src}
        >
          <NextImage
            height={800}
            width={(image.width / image.height) * 800}
            quality={100}
            loading="eager"
            src={image.src}
            alt={`Project Showcase Image ${image.src.split("/").slice(-1)}`}
            css={[
              image.width / image.height < 1 ? tw`rounded-2xl` : tw`rounded`,
              tw`shadow-xl object-contain md:rounded-2xl`,
            ]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectShowcase;
