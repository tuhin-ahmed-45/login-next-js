import Image from "next/image";
import { FaBars } from "react-icons/fa";
function Header() {
  return (
    <div>
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <Image
              src={"/images/logo-bookmark.svg"}
              alt="logo"
              width={150}
              height={150}
            />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button
              type="button"
              className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
            >
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <span>
              <FaBars />
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
