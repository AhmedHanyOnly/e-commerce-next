import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <nav className=" hidden lg:block bg-white shadow">
      <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone text-gray-600"></i>
            <bdi className="text-gray-800">+966 920003979</bdi>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-envelope text-gray-600"></i>
            <span className="text-gray-800">info@yousite.net</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-red-500">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/eng.svg"
              alt="Language Selector"
              width={24}
              height={24}
            />
            <span className="text-gray-800">English</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
