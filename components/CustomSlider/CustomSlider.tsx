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
    <div className="">
      <Slider {...settings}>
        <div className="">
          <div className="flex md:justify-around items-center justify-center md:flex-row flex-col">
            <div className="md:order-1 order-last text-center sm:text-left mt-4">
              <h1 className="text-white font-bold md:text-4xl pb-5 text-2xl">
                Are you Responding to God&apos;s Love?
              </h1>
              <p className="text-white md:leading-7 leading-6 md:text-base text-sm">
                When you truly grasp the depth of God&apos;s love for you, it
                compels you to
                <br />
                respond in love towards others. It motivates you to extend
                grace, show
                <br />
                compassion, and seek reconciliation.God&apos;s love becomes a
                catalyst for
                <br />
                positive transformation, both in your life and in the lives of
                those around
                <br />
                you. Respond to His love!
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
