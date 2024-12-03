import Image from "next/image";
import Link from "next/link";
import React from "react";

const BoxProduct = ({ product }) => {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <div className="box-product">
          <button className="btn-add">
            <span className="icon-plus"></span>
          </button>
          <Image
            width={100}
            height={100}
            src={product.image || "/img/no-image.jpeg"} 
            className="img-product"
            alt={product.title || "Product Image"}
          />
          <div className="text">
          <div className="title">{product?.title || "No Title"}</div>
                        <div className="price">
                          <div className="num">{product?.price || "0.00"}</div>
              ر.س
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoxProduct;
