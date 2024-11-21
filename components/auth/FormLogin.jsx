"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form
      id="loginForm"
      method="post"
      className="animate__animated animate__fadeInRight"
    >
      <div className="text-center mb-5">
        <Image
          src="/taka.svg" 
          alt="كوكبة التقنية"
          className="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
          width={150}
          height={150}
        />
        <h2 className="h3 fw-bold mb-2">مرحبا بك</h2>
        <p className="text-muted">أدخل البريد الالكتروني وكلمة السر للدخول</p>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          البريد الالكتروني
        </label>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
          />
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          كلمة السر
        </label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            placeholder="أدخل كلمة المرور"
            required
          />
          <span className="input-group-text" onClick={togglePassword}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <label className="form-check-label" htmlFor="remember">
            تذكرني دائما
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-primary text-decoration-none"
        >
          نسيت كلمة المرور؟
        </Link>
      </div>
      <button type="submit" className="btn btn-primary w-100 py-2">
        دخول
      </button>
    </form>
  );
};
