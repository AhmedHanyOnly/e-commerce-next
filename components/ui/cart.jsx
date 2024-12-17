"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BoxCart from "../boxes/box-cart";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/redux/reducers/cartSlice";
import { token, url } from "@/redux/type";
import { handleFetchCart } from "@/redux/actions/cart/cartAction";
function CartHolder() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => setOpen(!open);
  const products = useSelector((state) => state.cart.items);
  const loader = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  async function handleFetchCart() {
    try {
      dispatch(cartAction.setLoading(true));
      const response = await fetch(`${url}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("لا يوجد منتجات");
      }
      const data = await response.json();
      // console.log(response);
      dispatch(cartAction.setProducts(data.data.products));
      dispatch(cartAction.setTotalPrice(data.data.totalCartPrice));
    } catch (error) {
      dispatch(cartAction.setError());
    } finally {
      dispatch(cartAction.setLoading(false));
    }
  }
  async function handleClearCart() {
    try {
      dispatch(cartAction.setLoading(true)); // عرض حالة التحميل
      const response = await fetch(`${url}/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("لا يوجد منتجات");
      }

      dispatch(cartAction.setProducts([]));
      dispatch(cartAction.setTotalPrice(0));
      } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(cartAction.setLoading(false)); // إيقاف حالة التحميل
    }
  }

  useEffect(() => {
    handleFetchCart();
  }, [dispatch]);

  return (
    <>
      <button
        href="#"
        className="btn-cart flex items-center gap-2"
        onClick={handleToggle}
      >
        <div className="icon-holder relative">
          <span className="count absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            0
          </span>
          <Image src="/img/cart.svg" alt="Cart" width={20} height={20} />
        </div>
        <span>500.00 ر.س</span>
      </button>

      <Dialog open={open} onClose={handleToggle} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll scroll-smooth cart-holder bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        عربة التسوق
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={handleToggle}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {error && (
                          <div className="text-center h-100">{error}</div>
                        )}
                        {loader && (
                          <div className="text-center h-100">جاري التحميل...</div>
                        )}
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200 p-0"
                        >
                          {products.map((item, index) => (
                            <BoxCart
                              product={item}
                              key={index}
                              handleFetchCart={handleFetchCart}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>المجموع</p>
                      <p>{totalPrice} ريال</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      يتم احتساب الشحن والضرائب عند الدفع.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-main px-6 py-3 text-base font-medium text-white shadow-sm "
                      >
                        الدفع
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        <button
                          type="button"
                          onClick={handleClearCart}
                          className="font-medium text-indigo-600 main-color"
                        >
                          حذف عربة التسوق
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default CartHolder;
