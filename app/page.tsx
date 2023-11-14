import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import Image from "next/image";
import { AiFillYoutube } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div className="bg-[#1f1f21] pt-16">
        <div className="flex md:justify-around items-center justify-center md:flex-row flex-col">
          <div className="md:order-1 order-last text-center sm:text-left mt-4">
            <h1 className="text-white font-bold md:text-4xl pb-5 text-2xl">Are you Responding to God&apos;s Love?</h1>
            <p className="text-white md:leading-7 leading-6 md:text-base text-sm">
              When you truly grasp the depth of God&apos;s love for you, it compels you to<br />
              respond in love towards others. It motivates you to extend grace, show<br />
              compassion, and seek reconciliation.God&apos;s love becomes a catalyst for<br />
              positive transformation, both in your life and in the lives of those around<br />
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
      <AudioPlayer />
      <div className="flex bg-black w-12/12 md:h-96 h-auto rounded-3xl mx-[20px] mb-10 items-center justify-around md:flex-row flex-col">
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
            <h1 className="text-white md:text-4xl text-2xl md:pb-4">YouTube</h1>
          </div>
          <h2 className="text-white md:text-2xl md:pt-4 text-md">LATEST SERMON FROM DAVID MAKANJUOLA</h2>
          <div className="md:pt-10 pt-4">
            <a href="https://www.youtube.com/@officialdavidmakanjuolapd3858" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white hover:bg-transparent border-pink-500  border py-2 px-4 rounded">VIEW LATEST SERMON</a>
          </div>
        </div>
      </div>
    </div>
  )
}
