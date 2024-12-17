import { url } from "@/redux/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Notification from "../ui/notification";

const BoxCart = ({ product, handleFetchCart }) => {
  const token = localStorage.getItem("token");
  const [isAdded, setIsAdded] = useState(false);

  async function handleDeleteItem() {
    try {
      const response = await fetch(`${url}/cart/${product.product.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("خطا ف المنتج");
      }
      console.log(response)
      handleFetchCart()
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <li className="cart-product">

      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          alt="product"
          src={product.product.imageCover}
          className="size-full object-contain"
          width={50}
          height={50}
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium text-gray-900">
            <Link href={`/products/${product.product.id}`} className="title">
              {product.product.title}
            </Link>

            <p className="m-0">{product.price} ر.س</p>
          </div>
          <p className="my-1 text-sm text-gray-500">احمر</p>
        </div>
        <div className="flex flex-1 items-end h-1 justify-between text-sm">
          <p className="text-gray-500 m-0">الكمية {product.count}</p>

          <button
            onClick={handleDeleteItem}
            className="font-medium main-color hover:text-red-500"
          >
            حذف
          </button>
        </div>
      </div>
    </li>
  );
};

export default BoxCart;
