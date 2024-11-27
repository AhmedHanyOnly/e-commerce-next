"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function CartHolder() {
  const [open, setOpen] = useState(false);

  // const handleClose = () => setShow(false);
  const handleToggle = () => setOpen(!open);

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
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          <li className="cart-product">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                alt="product"
                                src="/img/product.webp"
                                className="size-full object-contain"
                                width={50}
                                height={50}
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between items-center text-base font-medium text-gray-900">
                                <Link href="" className="title">اسم المنتج</Link>

                                  <p className="m-0">100$</p>
                                </div>
                                <p className="my-1 text-sm text-gray-500">
                                  احمر
                                </p>
                              </div>
                              <div className="flex flex-1 items-end h-1 justify-between text-sm">
                                <p className="text-gray-500 m-0">الكمية 2</p>

                                <button
                                    type="button"
                                    className="font-medium main-color hover:text-red-500"
                                  >
                                    حذف
                                  </button>
                              </div>
                            </div>
                          </li>
                          {/* {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.imageAlt}
                                  src={product.imageSrc}
                                  className="size-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    Qty {product.quantity}
                                  </p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))} */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>المجموع</p>
                      <p>$262.00</p>
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
                          onClick={handleToggle}
                          className="font-medium text-indigo-600 main-color"
                        >
                          مواصلة التسوق
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
