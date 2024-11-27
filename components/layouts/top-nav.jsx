import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <nav className=" hidden lg:block bg-white shadow">
      <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 ">
            <span className="icon-phone main-color"></span>
            <bdi className="text-gray-800">+966 920003979</bdi>
          </div>
          <div className="flex items-center gap-2">
            <span className="icon-envelope-o main-color"></span>
            <span className="text-gray-800">info@yousite.net</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="#" className="text-gray-600  hover:text-blue-500 transition hover:scale-110 underline-offset-0 ">
              <span className="icon-facebook"></span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition hover:scale-110 underline-offset-0 ">
              <span className="icon-twitter"></span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-red-500 transition hover:scale-110 underline-offset-0 ">
              <span className="icon-youtube underline-offset-0"></span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500 transition hover:scale-110 underline-offset-0">
              <span className="icon-instagram"></span>
            </Link>
          </div>

          {/* <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/img/eng.svg"
              alt="Language Selector"
              width={24}
              height={24}
            />
            <span className="text-gray-800">English</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
