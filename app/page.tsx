import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#1f1f21] pt-16">
        <div className="flex md:justify-around items-center justify-center md:flex-row flex-col">
          <div className="md:order-1 order-last">
            <h1 className="text-white font-bold md:text-4xl pb-5 text-2xl">Are you Responding to God&apos;s Love?</h1>
            <p className="text-white leading-7 md:text-base text-sm">
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
    </div>
  )
}
