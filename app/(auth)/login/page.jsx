
import { FormLogin } from "@/components/auth/FormLogin";
import Image from "next/image";

export default function Login() {


  return (
    <div className="login-container">
      <div className="login-box animate__animated animate__fadeIn">
        <div className="row g-0">
          <div className="col-lg-6 login-bg">
            <div className="floating-shapes">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div>
              <Image
                src="/taka.svg" // قم بتغيير المسار حسب الحاجة
                alt="طلبات"
                className="img-fluid mb-4"
                style={{ maxWidth: "150px" }}
                width={150}
                height={150}
              />
              <h1 className="display-4 fw-bold mb-2 animate__animated animate__fadeInDown">
                طلباتك
              </h1>
              <p className="lead mb-5 animate__animated animate__fadeInUp">
                أحدث تقنيات صيانة السيارات لضمان قيادة آمنة ومريحة
              </p>
            </div>
            <p className="h5 fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              سياقتك تستحق الأفضل. ثق بنا لصيانة سيارتك وابقَ على الطريق بأمان
            </p>
          </div>
          <div className="col-lg-6 p-5">
            <div
              id="errorAlert"
              className="alert alert-danger alert-dismissible fade show d-none"
              role="alert"
            >
              <span id="errorMessage"></span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <FormLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}