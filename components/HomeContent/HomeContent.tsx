import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const HomeContent = () => {
  return (
      <div className="bg-white">
      <ScrollAnimation>
        <div className="pb-10">
          <div className="flex bg-black w-12/12 md:h-96 h-auto rounded-3xl mx-[20px] items-center justify-around md:flex-row flex-col">
            <div className="md:pt-[10px]">
              <Image
                src="/assets/pd_bodySection.png"
                alt="pd-image"
                height={500}
                width={500}
              />
            </div>
            <div className="pb-10">
              <div className="flex items-center gap-1">
                <AiFillYoutube className="text-white" fontSize="3.5em" />
                <h1 className="text-white md:text-4xl text-2xl md:pb-4">
                  YouTube
                </h1>
              </div>
              <h2 className="text-white md:text-2xl md:pt-4 text-md">
                LATEST SERMON FROM DAVID MAKANJUOLA
              </h2>
              <div className="md:pt-10 pt-4">
                <a
                  href="https://www.youtube.com/@officialdavidmakanjuolapd3858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white hover:bg-transparent border-pink-500  border py-2 px-4 rounded"
                >
                  VIEW LATEST SERMON
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default HomeContent;
