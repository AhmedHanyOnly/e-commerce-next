"use client";
import Image from "next/image";
import CartHolder from "../ui/cart";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MidNavbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const router = useRouter();
  function handleSignOut() {
    localStorage.clear();
    setToken(null);
    router.push("/login");
  }

  return (
    <nav className="navbar bottom-nav navbar-expand-lg">
      <div className="container gap-5 flex-col md:flex-row justify-stretch">
        <span className="logo hidden md:block">
          <Image src="/img/logo.svg" alt="Logo" width={100} height={40} />
        </span>
        <div className="inp-search relative w-100 ">
          <input type="text" className="" placeholder="كلمة البحث" />
          <Image
            src="/img/search.svg"
            alt="Search"
            className="search"
            width={100}
            height={50}
          />
        </div>
        {token ? (
          <div className="btn-nav-holder flex items-center gap-5">
            <div className="dropdown-holder">
              <button
                className="btn-toggle flex gap-2 items-center bg-transparent border-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src="/img/user.svg" alt="User" width={20} height={20} />
                حسابي
              </button>
              <ul className="menu">
                <li>
                  <Link className="dropdown-item px-4 py-2 " href="#">
                    البروفايل
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="dropdown-item px-4 py-2 "
                  >
                    تسجيل الخروج
                  </button>
                </li>
              </ul>
            </div>
            <CartHolder />
          </div>
        ) : (
          <div className="btn-nav-holder gap-3">
            <Link href="/login" className="main-btn text-light">
              تسجيل الدخول
            </Link>
            <Link href="/signup" className="main-btn white">
              انشاء الحساب
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MidNavbar;
