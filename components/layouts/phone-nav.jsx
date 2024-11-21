
const PhoneNavbar = () => {
  return (
    <header className="phone-header d-lg-none">
      <nav className="phone-nav py-2">
        <div className="container d-flex flex-column gap-2">
          <div className="nav-content">
            <div className="d-flex align-items-center gap-3">
              <button
                className="navbar-toggler"
                data-bs-theme="dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="btn-group">
                <button
                  className="btn-nav position-relative"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge p-1 fs-10px rounded-pill bg-danger"
                  >
                    0
                  </span>
                  <i className="fa-regular fa-bell"></i>
                </button>
                <ul className="dropdown-menu notice-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      <div className="avatar">
                        <Image src="/images/no-image.jpeg" alt="" width={40} height={40} />
                      </div>
                      <div className="text">
                        <div className="desc">عنوان الاشعار</div>
                        <div className="date">
                          <i className="fa-regular fa-clock"></i>
                          2022/2/2
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">لا يوجد إشعارات غير مقروءة</li>
                </ul>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-start"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header d-felx align-items-center justify-content-between">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item nav-img text-center">
                    <Image  src="/images/no-image.jpeg" className="img-user" alt="img" width={60} height={60} />
                    <h5>احمد هاني</h5>
                    <h6>a@a.com</h6>
                  </li>
                  <a href="" className="main-btn w-100 mb-1">سجل الدخول</a>
                  <a href="" className="main-btn w-100 mb-3">تسجيل عضوية</a>
                  <li className="nav-item">
                    <a className="nav-link active" href="">الرئيسية</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">البروفايل</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">من نحن</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">خدماتنا</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">اعمالنا</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">طلب خاص</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link red">تسجيل الخروج</a>
                    <form action="" method="POST" id="logout-form"></form>
                  </li>
                  <li className="nav-item d-flex flex-column gap-2 mt-3">
                    <div className="info">
                      <a href="tel:0555555555" className="contact pb-2">
                        <i className="fa-solid fa-phone icon"></i>
                        <div className="text">
                          <div className="title">اتصل بنا</div>
                          <div className="desc">0555555555</div>
                        </div>
                      </a>
                      <a
                        href="mailto:info@domain.com?subject=Mail from Our Site"
                        className="contact pb-2"
                      >
                        <i className="fa-solid fa-envelope icon"></i>
                        <div className="text">
                          <div className="title">البريد الالكتروني</div>
                          <div className="desc">info@domain.com</div>
                        </div>
                      </a>
                    </div>
                    <ul className="social-list justify-content-center">
                      <li>
                        <a href="" className="btn-link-social" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link-social" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link-social" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link-social" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 50 50"
                          >
                            <path
                              d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone={{ setting('whatsapp') }}"
                          className="btn-link-social"
                          target="_blank"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <a href="/" className="logo">
              <Image loading="lazy" src="/images/logo.svg" alt="img" width={150} height={50} />
            </a>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default PhoneNavbar