import Link from "next/link";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "الرئيسية", href: "/", current: true },
  { name: "نبذة عننا", href: "#", current: false },
  { name: "سياسة الموقع", href: "#", current: false },
  { name: "تواصل معنا", href: "#", current: false },
  { name: "الاقسام", href: "/category", current: false },
  { name: "المفضلة", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BottomNabar = () => {
  return (
    <>
      <Disclosure as="nav" className="menu-nav p-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="navbar-nav mb-2 mb-lg-0 flex space-x-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="nav-link"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <DisclosureButton
                  as="span" // هذا يعني أن العنصر سيتم تعيينه إلى رابط <a> داخل Link
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default BottomNabar;
