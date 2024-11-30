"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsAction } from "@/redux/reducers/productSlice";
import { useEffect } from "react";
import { handleFetchProducts } from "@/redux/actions/product/productAction";
import { url } from "@/redux/type";
import Link from "next/link";

const ProductsSlider = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    async function handleFetchProducts() {
      try {
        dispatch(productsAction.setLoading(true));
        const response = await fetch(`${url}/products`);
        console.log("fetch succeed products");

        if (!response.ok) {
          throw new Error("error in url fetching");
        }
        const data = await response.json();
        dispatch(productsAction.setProducts(data));
      } catch (error) {
        dispatch(productsAction.setError(error.message));
      } finally {
        dispatch(productsAction.setLoading(false));
      }
    }
    handleFetchProducts();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(loading);
  return (
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
        {products.map((product) => (
          <SwiperSlide className="swiper-slide" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div className="box-product">
                <button className="love-product">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  className="img-product"
                  alt="img"
                />
                <div className="text">
                  <div className="title">{product.title}</div>
                  <div className="price">
                    <div className="num">{product.price}</div>
                    ر.س
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
