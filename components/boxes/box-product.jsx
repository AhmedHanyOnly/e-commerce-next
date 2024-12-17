import { token, url } from "@/redux/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Notification from "../ui/notification";

const BoxProduct = ({ product }) => {
  
  async function addCartItem() {
    try {
      const response = await fetch(`${url}/cart`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
        }),
      });
      if (!response.ok) {
        throw new Error("خطا في المنتج");
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <div className="box-product-holder">
        <button className="btn-add" onClick={addCartItem}>
          <span className="icon-plus"></span>
        </button>
        <Link href={`/products/${product.id}`}>
          <div className="box-product">
            <Image
              width={100}
              height={100}
              src={
                product.imageCover
                  ? product.imageCover.replace("undefined/products/", "")
                  : "/img/no-image.jpeg"
              }
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
    </>
  );
};

export default BoxProduct;
