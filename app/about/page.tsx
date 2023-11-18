import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <ScrollAnimation>
        <div>
          <div className="bg-gray-500 md:h-[400px] h-[353px] mb-8">
            <div className="flex items-center justify-center relative">
              <Image
                src="/assets/about.png"
                alt="about"
                height={600}
                width={600}
                className="opacity-70 md:pt-0 pt-6"
              />
              <h1 className="text-white md:text-5xl text-4xl font-bold absolute">
                Pastor David Makanjuola
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-pink-500 text-center">
              About Pastor David Makanjuola
            </h1>
            <div className="flex md:justify-around shadow-md md:pb-8 md:flex-row flex-col">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Lead Pastor
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                  Bolaji Odejide
                </h2>
                <p className="mt-2 text-gray-500">
                  Bolaji Odejide is a strategic leadership trainer, a charismatic
                  pastor, a theologian, and an author.
                </p>
                <p className="mt-2 text-gray-500">
                  He is the Lead Pastor of Believers ‘ Heritage Baptist Church and
                  the Convener of Prophetic Assembly, an interdenominational
                  meeting that gathers thousands of people from different parts of
                  the world in its annual meeting, with the vision of raising,
                  empowering, and releasing end-time armies for kingdom growth.
                </p>
                <p className="mt-2 text-gray-500">
                  He is the pioneer and convener of Come and Drink Discipleship,
                  the fast-growing and life-changing holistic weekly gathering.
                </p>
                <p className="mt-2 text-gray-500">
                  He is also the President of Project H.O.P.E., an initiative with
                  the goal of giving orphans a good education and helping them get
                  through life with ease.
                </p>
                <p className="mt-2 text-gray-500">
                  He is also the Founder of Campus Invasion Company, a subsidiary
                  of the Flaming Prophetic Assembly Worldwide, with a vision aimed
                  at winning souls and restoring lives for Christ in universities,
                  colleges, and institutions nationwide.
                </p>
                <p className="mt-2 text-gray-500">
                  He is the proprietor of TFPAW School of Ministry, a learning
                  institution where professionals and young ministers are groomed
                  to fulfill ministry purposes in their careers and profession.
                </p>
              </div>
              <div className="bg-[#1f1f21] md:mr-10">
                <Image
                  src="/assets/pd.png"
                  alt="about"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
    </div>
  );
};

export default About;
