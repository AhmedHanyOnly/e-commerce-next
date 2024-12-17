"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FiltersPage() {
  // State management
  const [sliderFilter, setSliderFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [categories, setCategories] = useState([
    { id: 1, name: "الفئة 1", products_count: 10 },
    { id: 2, name: "الفئة 2", products_count: 5 },
    { id: 3, name: "الفئة 3", products_count: 7 },
  ]);
  const [categoryDisplayCount, setCategoryDisplayCount] = useState(3);
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "منتج 1",
      price: 100,
      price_before_discount: 120,
      image: "",
      is_my_favourite: false,
      quantity: 5,
    },
    {
      id: 2,
      name: "منتج 2",
      price: 200,
      price_before_discount: 0,
      image: "",
      is_my_favourite: true,
      quantity: 0,
    },
    // Add more products as needed
  ]);
  const [loading, setLoading] = useState(false);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);

  // Functions
  const toggleActive = (key) => setSliderFilter(!sliderFilter);

  const resetFilter = () => {
    setCategoryFilter([]);
    setMinFilter("");
    setMaxFilter("");
  };

  const showMore = () => {
    setCategoryDisplayCount(categories.length);
  };

  const showLess = () => {
    setCategoryDisplayCount(3);
  };

  const addToFavourite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, is_my_favourite: !product.is_my_favourite }
          : product
      )
    );
  };

  const addCart = (id) => {
    console.log(`Added product ${id} to cart`);
  };

  return (
    <div id="app" className="main-section">
      <div className="container-xxl">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-lg-4 col-xl-3">
            <div
              className={`box-product filters ${sliderFilter ? "show" : ""}`}
            >
              <div className="d-flex d-lg-none align-items-center justify-content-between mb-3">
                <h1 className="mb-0 fs-4">فلترة</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => toggleActive("sliderFilter")}
                ></button>
              </div>
              <div className="form-holder">
                <label className="fw-bold mb-1">القسم</label>
                {categories.slice(0, categoryDisplayCount).map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-between gap-2 mb-2"
                  >
                    <div className="d-flex align-items-center gap-1">
                      <input
                        type="checkbox"
                        value={item.id}
                        id={`item${item.id}`}
                        checked={categoryFilter.includes(item.id)}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10);
                          setCategoryFilter((prev) =>
                            prev.includes(value)
                              ? prev.filter((id) => id !== value)
                              : [...prev, value]
                          );
                        }}
                      />
                      <label htmlFor={`item${item.id}`}>{item.name}</label>
                    </div>
                    <small className="float-end text-body-secondary">
                      ({item.products_count})
                    </small>
                  </div>
                ))}
                {categories.length >= categoryDisplayCount && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      categoryDisplayCount === categories.length
                        ? showLess()
                        : showMore();
                    }}
                    className="show-more"
                  >
                    {categoryDisplayCount === categories.length
                      ? "اظهار اقل"
                      : "اظهار المزيد"}
                  </a>
                )}
              </div>
              <div className="form-holder">
                <label className="fw-bold mb-1">السعر</label>
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={minFilter}
                    onChange={(e) => setMinFilter(e.target.value)}
                    placeholder="من"
                    className="form-control"
                  />
                  <input
                    type="number"
                    min="1"
                    value={maxFilter}
                    onChange={(e) => setMaxFilter(e.target.value)}
                    placeholder="الي"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-none justify-content-center d-lg-flex">
                <button onClick={resetFilter} className="main-btn mt-3">
                  اعادة ضبط الفلاتر
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-12 col-lg-8 col-xl-9">
            <button
              onClick={() => toggleActive("sliderFilter")}
              className="btn-filter d-flex d-lg-none mb-3"
            >
              <i className="fa-solid fa-sliders"></i>
              فلترة
            </button>
            <div className="box-product p-4 bg-transparent me-lg-4">
              <div className="main-title p-3">المنتجات</div>
              <div className="row g-2 g-lg-4 row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                {products.map((product) => (
                  <div key={product.id} className="col">
                    <Link href={`/products/${product.id}`}>
                      <div className="box-product">
                        <Image
                          width={100}
                          height={100}
                          src="/img/product.webp"
                          className="img-product"
                          alt="img"
                        />
                        <div className="text">
                          <div className="title">{product.name}</div>
                          <div className="price">
                            <div className="num">{product.price}</div>
                            ر.س
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {loading && !allProductsLoaded && (
                <div
                  className="spinner-border text-main-color mt-3 mx-auto d-block"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
