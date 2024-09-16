import React, { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactSlider from "react-slick";
import { RightArrowIcon } from "@/assets/icons";
import { Slider as SliderImage } from "@/assets/images";
import Image from "next/image";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const sliderData = [
  {
    id: 2,
    title: "Welcome to shopery",
    subTitle: "Fresh & Healthy Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
  },
  {
    id: 1,
    title: "Welcome to shopery 2",
    subTitle: "Fresh & Healthy Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
  },
  {
    id: 3,
    title: "Welcome to shopery 3",
    subTitle: "Fresh & Healthy Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
  },
  {
    id: 4,
    title: "Welcome to shopery 3",
    subTitle: "Fresh & Healthy Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  console.log(sliderRef);

  const moveToIndex = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="mb-52">
      <section className="container mx-auto bg-gray-50 rounded-lg mt-6 relative">
        <ReactSlider
          ref={sliderRef}
          {...settings}
          afterChange={(event) => {
            setActiveIndex(event);
          }}
        >
          {sliderData.map((sliderItem) => (
            <div key={sliderItem.id}>
              <div className="flex items-center  px-[6.25rem] py-[11.375rem] ">
                <div className="flex-1">
                  <p className="text-[0.875rem] text-primary font-medium">
                    {sliderItem.title}
                  </p>
                  <h className="mt-2 text-[4.5rem] font-semibold leading-[5.4rem]">
                    {sliderItem.subTitle}
                  </h>
                  <p className="mt-7 text-[2rem] font-semibold">
                    Sale up to{" "}
                    <span className="text-warning font-bold">
                      {sliderItem.discount}
                    </span>{" "}
                  </p>
                  <p className="mt-3 text-[0.875rem] text-gray-500">
                    {sliderItem.description}
                  </p>

                  <button className="flex items-center mt-8 text-[1rem] font-semibold py-4 px-10 bg-primary rounded-[3.3125rem] text-white">
                    Shop now
                    <Image
                      src={RightArrowIcon}
                      alt="right-arrow"
                      className="w-4 h-4 ml-4"
                    />
                  </button>
                </div>
                <div className="flex-[1]">
                  <Image
                    src={SliderImage}
                    alt="slider"
                    className=" object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </ReactSlider>

        <Pagination activeIndex={activeIndex} moveToIndex={moveToIndex} />
      </section>
    </div>
  );
};

export default Slider;

const Pagination = (props) => {
  return (
    <div className="flex items-center justify-center absolute bottom-14 left-0 right-0">
      {sliderData.map((sliderItem, index) => (
        <div key={sliderItem.id}>
          <PaginationDots
            active={index === props.activeIndex}
            index={index}
            moveToIndex={props.moveToIndex}
          />
        </div>
      ))}
    </div>
  );
};

const PaginationDots = (props) => {
  return (
    <div
      onClick={() => props.moveToIndex(props.index)}
      className={`h-2 ${
        props.active ? "w-4  bg-[#00B207] transition-[width] duration-50" : "w-2  bg-[#B4CCB4]"
      } rounded-full mx-1 cursor-pointer`}
    ></div>
  );
};
