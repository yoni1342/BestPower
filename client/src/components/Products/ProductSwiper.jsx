import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const ProductSwiper = ({ images }) => {
  const swiperRef = useRef();

  useEffect(() => {
    swiperRef.current?.swiper?.autoplay.stop();
  }, [swiperRef]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        swiperRef.current?.swiper?.autoplay.start();
      }}
      onMouseLeave={() => {
        swiperRef.current?.swiper?.autoplay.stop();
        swiperRef.current?.swiper?.slideTo(0);
      }}
    >
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 200, stopOnLastSlide: false }}
        speed={800}
        modules={[Autoplay]}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="z-10 rounded flex justify-center">
              <img
                src={img}
                className="rounded h-[200px] object-contain"
                alt="imgswiper"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
