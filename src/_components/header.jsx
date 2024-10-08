
import Image from "next/image";

import {
  ArrowDownIcon,
  CartIcon,
  HeartIcon,
  Location,
  PhoneIcon,
  SearchIcon
} from "@/assets/icons";
import { Logo } from "@/assets/images";

const Header = () => {
  return (
    <header>
      <div className="py-3 border-b-2 border-gray-100">
        <div className="flex justify-between container mx-auto">
          <div className="flex items-center">
            <Image src={Location} alt="Location" />
            <span className="ml-2">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center border-r-2 border-gray-100 pr-5">
              <div className="flex items-center">
                <span className="mr-[6px]">Eng</span>
                <Image src={ArrowDownIcon} alt="arrow down" />
              </div>
              <div className="flex items-center ml-5">
                <span className="mr-[6px]">USD</span>
                <Image src={ArrowDownIcon} alt="arrow down" />
              </div>
            </div>
            <div className="ml-5">
              <span>Sign In</span>
              <span className="mx-1">/</span>
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between">
        <Image src={Logo} alt="logo" className="w-[11.4375rem] h-[2.375rem]" />

        <div className="flex items-center my-[1.6875rem] ">
          <div className="flex items-center border border-r-0 border-gray-100 py-3 px-4 rounded-l-md min-w-[25rem]">
            <Image src={SearchIcon} className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none ml-2"
            />
          </div>
          <button className="bg-primary py-[0.875rem] px-6 text-white font-semibold text-[0.875rem] rounded-r-md">
            Search
          </button>
        </div>

        <div className="flex items-center">
          <div className="border-r-2 border-gray-100 pr-4">
            <Image src={HeartIcon} className="h-8 w-8" />
          </div>
          <div className="ml-4 flex items-center">
            <Image src={CartIcon} className="w-[2.125rem] h-[2.125rem]" />
            <div className="ml-3">
              <p> Shopping Cart</p>
              <p> $57.70</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 ">
        <div className="flex text-white items-center justify-between container mx-auto">
          <div>
            <ul className="flex items-center py-[1.1875rem]">
              <li className="flex items-center mr-8">
                <a href="" className="text-gray-400">
                  Home
                </a>
                <Image
                  src={ArrowDownIcon}
                  alt="ar-d"
                  className="ml-1 h-4 w-4"
                />
              </li>
              <li className="flex items-center mr-8">
                <a href="" className="text-gray-400">
                  About Us
                </a>
                <Image
                  src={ArrowDownIcon}
                  alt="ar-d"
                  className="ml-1 h-4 w-4"
                />
              </li>
              <li className="flex items-center mr-8">
                <a href="" className="text-gray-400">
                  Contact
                </a>
                <Image
                  src={ArrowDownIcon}
                  alt="ar-d"
                  className="ml-1 h-4 w-4"
                />
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Image src={PhoneIcon} alt="phone" className="h-8 w-8" />
            <span className="ml-2 text-[0.875rem] font-medium">
              (219) 555-0114
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
