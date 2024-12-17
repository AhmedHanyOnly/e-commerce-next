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
import BoxProduct from "../boxes/box-product";

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
        if (!response.ok) {
          throw new Error("error in url fetching");
        }
        const data = await response.json();
        // console.log("fetch succeed products", data);
        dispatch(productsAction.setProducts(data.data));
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
  // console.log(loading);
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
            <BoxProduct product={product}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
