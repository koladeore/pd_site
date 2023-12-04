"use client"
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SamplePrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  // Add other prop types if needed
}
function SampleNextArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "10px", zIndex: 1, cursor: "pointer" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "10px", zIndex: 1, cursor: "pointer" }}
      onClick={onClick}
    />
  );
}
const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="bg-[#1f1f21]">
      <Slider {...settings}>
        <div className="">
          <div className="flex md:justify-around items-center justify-center md:flex-row flex-col">
            <div className="md:order-1 order-last text-center sm:text-left mt-4">
              <h1 className="text-white font-bold md:text-4xl pb-5 text-2xl">
                Welcome to Pastor David Makanjuola&apos;s Corner,
              </h1>
              <p className="text-white md:leading-7 leading-6 md:text-base text-sm">
                A place of love, faith, and community,
                We&apos;re thrilled to have you here,
                <br />
                ready to embark on a journey of spiritual growth and inspiration.
                <br />
                Join us as we seek God&apos;s truth, support one another, and experience the power of His presence.
                <br />
                Together, let&apos;s discover a deeper understanding of His love, find solace in His Word
                <br />
                and cultivate a faith that transforms lives.
                Welcome home.
              </p>
            </div>
            <div className="md:order-last">
              <Image
                src="/assets/pd_image.png"
                alt="pd_image"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex md:justify-around items-center justify-center md:flex-row flex-col">
            <div className="md:order-1 order-last text-center sm:text-left mt-4">
              <h1 className="text-white font-bold md:text-4xl pb-5 text-2xl">
                Hearken diligently to the word of God
              </h1>
              <p className="text-white md:leading-7 leading-6 md:text-base text-sm">
                An individual disconnected from the teachings of God`s word
                <br />
                cannot fully partake in the blessings bestowed upon him/her.
                <br />
                It necessitates a purposeful and persistent engagement with the scriptures.
                <br />
                To be an adept steward, unashamed and adept at rightly interpreting the truth
                <br />
                one must commit to earnest and diligent study of the word of God.
              </p>
            </div>
            <div className="md:order-last">
              <Image
                src="/assets/pd.png"
                alt="about"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
