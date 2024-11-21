'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Parallax } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

const LandSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="swiper-landing">
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation, EffectFade, Parallax]}
        parallax={true}
        effect="fade"
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* شريحة 1 */}
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src="/slider-2.jpg" className="img-slider" fill alt="Slide Image" />
            <div className="container">
              <div className="box-intro">
                <p className="title" data-swiper-parallax="-1000">
                  عروض و خصومات
                </p>
                <h2 className="des mb-5" data-swiper-parallax="-1500">
                  بمناسبة الافتتاح
                </h2>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <a href="#" className="btn-shop py-md-3 px-md-5 fs-md-4">
                    تسوق الأن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src="/slider-2.jpg" className="img-slider" fill alt="Slide Image" />
            <div className="container">
              <div className="box-intro">
                <p className="title" data-swiper-parallax="-1000">
                  عروض و خصومات
                </p>
                <h2 className="des mb-5" data-swiper-parallax="-1500">
                  بمناسبة الافتتاح
                </h2>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <a href="#" className="btn-shop py-md-3 px-md-5 fs-md-4">
                    تسوق الأن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src="/slider-2.jpg" className="img-slider" fill alt="Slide Image" />
            <div className="container">
              <div className="box-intro">
                <p className="title" data-swiper-parallax="-1000">
                  عروض و خصومات
                </p>
                <h2 className="des mb-5" data-swiper-parallax="-1500">
                  بمناسبة الافتتاح
                </h2>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <a href="#" className="btn-shop py-md-3 px-md-5 fs-md-4">
                    تسوق الأن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div ref={prevRef} className="swiper-button-prev"></div>
        <div ref={nextRef} className="swiper-button-next"></div>
      </Swiper>

      {/* زري التنقل */}

    </div>
  );
};

export default LandSlider;
