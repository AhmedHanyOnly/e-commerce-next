import { Suspense } from "react";
import ProductsSlider from "../sliders/productsSlider";


const ProductsHolder = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-title">وصل حديثاً</div>
        <div className="main-desc">متجر ستور وفر لك منتجات عالمية وبجودة عالية</div>
        <Suspense fallback={`loading`}>
        <ProductsSlider/>
        </Suspense>
      </div>
    </section>
  );
};

export default ProductsHolder;
