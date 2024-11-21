import Link from "next/link";
import React from "react";

const BottomNabar = () => {
  return (
    <nav className="menu-nav hidden lg:block">
      <div className="container">
        <ul className="navbar-nav mb-2 mb-lg-0 flex space-x-4">
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              نبذة عننا
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              سياسة الموقع
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              تواصل معنا
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              المتاجر
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-gray-800 hover:text-blue-600" href="#">
              المفضلة
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNabar;
