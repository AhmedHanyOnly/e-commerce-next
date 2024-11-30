"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { url } from "@/redux/type";

const ProductShow = () => {
  const { productId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const products = useSelector((state) => state.products.items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function handleFetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(`${url}/products/${productId}`);
        console.log("fetch succeed product");
        if (!response.ok) {
          throw new Error("error in url fetching");
        }
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    handleFetchProducts();
  }, []);
  useEffect(() => {
    if (!thumbsSwiper) {
      setThumbsSwiper(null);
    }
  }, [thumbsSwiper]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

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
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2 productSwiper2"
            >
              {product?.image ? (
                <SwiperSlide>
                  <div className="main">
                    <Image
                      src={product?.image}
                      className="img"
                      alt="main-img"
                      width={100}
                      height={100}
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide>
                  <div className="main">
                    <Image
                      src="/img/no-image.jpeg"
                      className="img"
                      alt="main-img"
                      width={100}
                      height={100}
                    />
                  </div>
                </SwiperSlide>
              )}
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
              {product?.image ? (
                <SwiperSlide>
                  <div className="other">
                    <Image
                      src={product?.image}
                      className="img"
                      width={100}
                      height={100}
                      alt={product?.image}
                    />
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide>
                  <div className="other">
                    <Image
                      src="/img/no-image.jpeg"
                      className="img"
                      width={100}
                      height={100}
                      alt="no-image"
                    />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          <div className="col-12 col-md-6">
            <div className="data-product">
              <div className="info">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="name mb-3">{product?.title}</div>
                </div>

                <div className="desc-product mb-3">
                  {product?.description.slice(0, 100) + "..."}
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
                  <div className="price-gl"> {product?.price} ر.س</div>
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
        <div className=" main-tab-content "> {product?.description}</div>

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
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                480: {
                  slidesPerView: 1.5,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {products.map((item) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  <Link href={`/products/${item.id}`}>
                    <div className="box-product">
                      <button
                        className="love-product"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <Image
                        width={100}
                        height={100}
                        src={item.image || "/img/no-image.jpeg"} 
                        className="img-product"
                        alt={item.title || "Product Image"}
                      />
                      <div className="text">
                        <div className="title">{item?.title || "No Title"}</div>
                        <div className="price">
                          <div className="num">{item?.price || "0.00"}</div>
                          <span>ر.س</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShow;
