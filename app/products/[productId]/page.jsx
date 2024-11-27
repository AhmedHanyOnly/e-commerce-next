"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductShow = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="main-section show-product ">
      <div className="container">
        <div className="row g-3 mb-1">
          <div className="col-12 col-md-6">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2 productSwiper2"
            >
              <SwiperSlide>
                <div className="main">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="img"
                    alt="main-img"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="img"
                    alt="main-img"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img"
                    alt="main-img"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    className="img"
                    alt="main-img"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    className="img"
                    alt="main-img"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper productSwiper "
            >
              <SwiperSlide>
                <div className="other">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="img"
                    width={100}
                    height={100}
                    alt="ss"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="other">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="img"
                    width={100}
                    height={100}
                    alt="ss"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="other">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img"
                    width={100}
                    height={100}
                    alt="ss"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="other">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    className="img"
                    width={100}
                    height={100}
                    alt="ss"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="other">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    className="img"
                    width={100}
                    height={100}
                    alt="ss"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <Swiper modules={[Thumbs]} className="swiper thumb-swiper">
                  <SwiperSlide>
                    <div className="other">
                      <a
                        href="/front-asset/img/image-preview.webp"
                        data-fancybox="gallery"
                        data-caption="اسم المنتج"
                      >
                        <Image
                          loading="lazy"
                          src="/front-asset/img/image-preview.webp"
                          alt="اسم المنتج"
                          className="img"
                          width={200}
                          height={200}
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper> */}
          </div>

          <div className="col-12 col-md-6">
            <div className="data-product">
              <div className="info">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="name mb-3">
                    بطارية راف باور بسعة 14000 ملي امبير بقوة 30 واط بمنفذين
                    تايب سي بي دي ومنفذ يو اس بي - اسود
                  </div>
                  {/* <div className="buttons-options">
                    <button
                      type="button"
                      className="btn-icon-pr favorites active"
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                    <button
                      type="button"
                      id="btn-shere"
                      className="btn-icon-pr share"
                    >
                      <i className="fa-solid fa-share-from-square"></i>
                    </button>
                  </div> */}
                </div>
                {/* <div className="rate">
                  <span>التقييم</span>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div> */}
                <div className="desc-product mb-3">
                  بطارية راف باور بسعة 14000 ملي امبير بقوة 30 واط بمنفذين تايب
                  سي بي دي ومنفذ يو اس بي - اسود وصف المنتج: استمتع بشحن محمول
                  قوي وموثوق به مع بطارية م...
                  <Link href="#description" className="fw-bold text-slate-700">
                    عرض المزيد
                  </Link>
                </div>
              </div>
              <div className="control mt-1">
                <div className="count">
                  <button className="increment">+</button>
                  <span className="val">1</span>
                  <button className="decrement">-</button>
                </div>
                <div className="d-flex gap-3">
                  <div className="price-gl">200 د.ل</div>
                </div>
              </div>
              <div className="control-btn">
                <button className="main-pr"> اضافة للسلة</button>

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#purchase"
                  className="main-pr flex justify-center"
                >
                  اشتري الان
                  <svg
                    className="svg-inline--fa fa-wallet me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="wallet"
                    role="img"
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-tabs " id="description">
          <button className="nav-link active">تفاصيل المنتج</button>
        </div>
        <div className=" main-tab-content ">الوصف الوصف الوصف</div>

        <div>
          <h5 className="main-title">منتجات ذات صلة</h5>
          <div className="product-slider">
            <Swiper
              className="swiper-wrapper"
              modules={[Navigation]}
              parallax={true}
              effect="fade"
              loop={true}
              spaceBetween={10}
              slidesPerView={4.5}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="swiper-slide" >
                <Link href={`/products/232`}>
                  <div className="box-product">
                    <button className="love-product">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                    <Image
                      width={100}
                      height={100}
                      src='/img/product.webp'
                      className="img-product"
                      alt="img"
                    />
                    <div className="text">
                      <div className="title">
                        Mens Casual Premium Slim Fit T-Shirts{" "}
                      </div>
                      <div className="price">
                        <div className="num">22.3 </div>
                        ر.س
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShow;
