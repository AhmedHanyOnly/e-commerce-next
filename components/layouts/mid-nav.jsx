import Image from "next/image";

const MidNavbar = () => {
  return (
    <nav className="navbar bottom-nav navbar-expand-lg hidden lg:block">
      <div className="container gap-5">
        <span className="logo">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
        </span>
        <div className="inp-search relative">
          <input
            type="text"
            className="w-full px-4 pe-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-4 py-2 border rounded-md"
            placeholder="كلمة البحث"
          />
          <Image
            src="/search.svg"
            alt="Search"
            className="absolute top-2 right-2 w-5 h-5"
            width={100}
            height={50}
          />
        </div>
        <div className="btn-nav-holder flex items-center gap-5">
          <div className="dropdown">
            <button
              className="btn-toggle flex gap-2 items-center bg-transparent border-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image src="/user.svg" alt="User" width={20} height={20} />
              حسابي
            </button>
            <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded-md py-2">
              <li>
                <a className="dropdown-item px-4 py-2 block" href="#">
                  البروفايل
                </a>
              </li>
              <li>
                <form action="">
                  <button
                    type="submit"
                    className="dropdown-item px-4 py-2 block"
                  >
                    تسجيل الخروج
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-cart flex items-center gap-2">
            <div className="icon-holder relative">
              <span className="count absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                0
              </span>
              <Image src="/cart.svg" alt="Cart" width={20} height={20} />
            </div>
            <span>500.00 ر.س</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MidNavbar;
