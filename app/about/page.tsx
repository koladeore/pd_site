import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <ScrollAnimation>
        <div>
          <div className="bg-gray-500 md:h-[400px] h-auto mb-8">
            <div className="flex items-center justify-center relative">
              <Image
                src="/assets/about.png"
                alt="about"
                height={600}
                width={600}
                className="opacity-70 md:pt-0 pt-6"
              />
              <h1 className="text-white text-center md:text-5xl text-2xl font-bold absolute pt-12 md:pt-0">
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
                  Also known as PD
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                  David Makanjuola
                </h2>
                <p className="mt-2 text-gray-500">
                  PD&apos;s commitment to his spiritual calling is unwavering, and he consistently endeavors to 
                  communicate the message of Christ with clarity, sincerity, and conviction.
                </p>
                <p className="mt-2 text-gray-500">
                  PD is the Lead Pastor at SOS, a vibrant campus fellowship in three Kwara State campuses.
                  He also convenes Parousia Extension, an annual gathering of 1000+ youth, where prayers, praise, healings, and miracles abound for those in darkness.
                </p>
                <p className="mt-2 text-gray-500">
                  His dedication to making a positive impact is not limited to the spiritual realm.
                  He serves as the CEO of DMI Branding Agency, a branding and fashion agency that incorporates elements of hope and inspiration into its designs.
                  Through fashion, PD aims to uplift and encourage individuals, demonstrating his unwavering dedication to his mission.
                </p>
                <p className="mt-2 text-gray-500">
                  PD is not only a dynamic speaker and organizer but also a prolific author.
                  His numerous books cover spiritual and personal growth, providing invaluable guidance, inspiration, and enlightenment.
                  PD&apos;s influence extends digitally, with his podcasts and materials reaching diverse audiences, blessing and encouraging countless individuals.
                </p>
                <p className="mt-2 text-gray-500">
                  He holds a BSc. in Environmental Management and Toxicology, and also graduated from Freedom Ministry Academy, deepening his ministry knowledge.
                  He received certificates from the Young Africa Leaders Initiative for personal growth strategies and understanding climate change, showcasing his commitment to growth and addressing global challenges.
                </p>
                <p className="mt-2 text-gray-500">
                  Above all, PD&apos;s unwavering passion for God and humanity defines him.
                  Rooted in deep faith, his teachings and actions reflect genuine care for others, making a positive impact. 
                  He is married to Mrs. Deborah Makanjuola, his partner in life and purpose, and blessed with a daughter.
                </p>
              </div>
              <div className="mx-auto">
                <div className="bg-[#1f1f21] h-[405px] md:w-[400px] w-[300px] mt-10">
                  <div className="md:pl-12 pl-0">
                    <Image
                      src="/assets/pd_aboutImage.png"
                      alt="about"
                      height={200}
                      width={300}
                    />
                  </div>
                </div>
                <div className="bg-[#1f1f21] md:mr-10 h-[405px] md:w-[400px] w-[300px] mt-2 mb-10 mb:0">
                  <div className="pl-12 flex items-center justify-center">
                    <Image
                      src="/assets/pd_aboutImage_two.png"
                      alt="about"
                      height={270}
                      width={270}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
    </div>
  );
};

export default About;
