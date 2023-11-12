import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex items-center justify-center pt-10 pb-8">
        <Link href="/" className="bg-transparent text-pink-500 border border-pink-500 py-2 px-4 rounded inline-block hover:bg-pink-500 hover:text-white">More Messages</Link>
      </div>
    </div>
  )
}
