import Image from "next/image";
import CartHolder, { Cart } from "../ui/cart";

const MidNavbar = () => {
  return (
    <nav className="navbar bottom-nav navbar-expand-lg ">
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
        <div className="btn-nav-holder flex items-center gap-5">
          <div className="dropdown">
            <button
              className="btn-toggle flex gap-2 items-center bg-transparent border-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image src="/img/user.svg" alt="User" width={20} height={20} />
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
          <CartHolder />
        </div>
      </div>
    </nav>
  );
};

export default MidNavbar;
