"use client";

import Image from "next/image";

import { Logo, Slider } from "@/assets/images";
import {
  ArrowDownIcon,
  CartIcon,
  HeartIcon,
  Location,
  PhoneIcon,
  RightArrowIcon,
  SearchIcon,
} from "@/assets/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactSlider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  return (
    <main>
      <header>
        <div className="py-3 border-b-2 border-[#E6E6E6]">
          <div className="flex justify-between container mx-auto">
            <div className="flex items-center">
              <Image src={Location} alt="Location" />
              <span className="ml-2">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center border-r-2 border-[#E6E6E6] pr-5">
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
          <Image
            src={Logo}
            alt="logo"
            className="w-[11.4375rem] h-[2.375rem]"
          />

          <div className="flex items-center my-[1.6875rem] ">
            <div className="flex items-center border border-r-0 border-[#E6E6E6] py-3 px-4 rounded-l-md min-w-[25rem]">
              <Image src={SearchIcon} className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none ml-2"
              />
            </div>
            <button className="bg-[#00B207] py-[0.875rem] px-6 text-white font-semibold text-[0.875rem] rounded-r-md">
              Search
            </button>
          </div>

          <div className="flex items-center">
            <div className="border-r-2 border-[#E6E6E6] pr-4">
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
        <div className="bg-[#333333] ">
          <div className="flex text-white items-center justify-between container mx-auto">
            <div>
              <ul className="flex items-center py-[1.1875rem]">
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Home
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    About Us
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
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

      <section className="container mx-auto bg-[#EDF2EE] rounded-lg mt-6 ">
        <ReactSlider {...settings}>
          <div>
            <div className="flex items-center  px-[6.25rem] py-[11.375rem] ">
              <div className="flex-1">
                <p className="text-[0.875rem] text-[#00B207] font-medium">
                  Welcome to shopery
                </p>
                <h className="mt-2 text-[4.5rem] font-semibold leading-[5.4rem]">
                  Fresh & Healthy Organic Food
                </h>
                <p className="mt-7 text-[2rem] font-semibold">
                  Sale up to{" "}
                  <span className="text-[#ff8a00] font-bold">30% OFF</span>{" "}
                </p>
                <p className="mt-3 text-[0.875rem] text-[#808080]">
                  Free shipping on all your order. we deliver, you enjoy
                </p>

                <button className="flex items-center mt-8 text-[1rem] font-semibold py-4 px-10 bg-[#00B207] rounded-[3.3125rem] text-white">
                  Shop now
                  <Image
                    src={RightArrowIcon}
                    alt="right-arrow"
                    className="w-4 h-4 ml-4"
                  />
                </button>
              </div>
              <div className="flex-[1]">
                <Image src={Slider} alt="slider" className=" object-contain" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex px-[6.25rem] py-[11.375rem] ">
              <div className="flex-1">
                <p className="text-[0.875rem] text-[#00B207] font-medium">
                  Welcome to shopery
                </p>
                <h className="mt-2 text-[4.5rem] font-semibold leading-[5.4rem]">
                  Fresh & Healthy Organic Food
                </h>
                <p className="mt-7 text-[2rem] font-semibold">
                  Sale up to{" "}
                  <span className="text-[#ff8a00] font-bold">30% OFF</span>{" "}
                </p>
                <p className="mt-3 text-[0.875rem] text-[#808080]">
                  Free shipping on all your order. we deliver, you enjoy
                </p>

                <button className="flex items-center mt-8 text-[1rem] font-semibold py-4 px-10 bg-[#00B207] rounded-[3.3125rem] text-white">
                  Shop now
                  <Image
                    src={RightArrowIcon}
                    alt="right-arrow"
                    className="w-4 h-4 ml-4"
                  />
                </button>
              </div>
              <div className="flex-1">
                <Image src={Slider} alt="slider" className=" object-contain" />
              </div>
            </div>
          </div>
        </ReactSlider>
      </section>
    </main>
  );
}
