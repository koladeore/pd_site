import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { client } from "@/app/lib/sanity";
import { DownloadMessage } from "./download/DownloadMessage";
import Link from "next/link";
import AudioImage from "./AudioImage/AudioImage";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { AudioData } from "@/app/lib/interface";
import ListenToAudio from "./ListenToAudio/ListenToAudio";
import AudioPlayerToggle from "./AudioPlayerToggle/AudioPlayerToggle";
import YoutubePlayer from "./YoutubePlayer/YoutubePlayer";

async function getData() {
  const query = `*[_type == 'audioMessage']{ 
    title,
    description,  
    'file': audioFile.asset->url,
    'image': image.asset->url,
    youtubeUrl,
  }`;
;
  const data = await client.fetch(query, {
    next: {
      revalidate: 0,
    },
  });
  return data;
}
const Messages = async () => {
  const data = (await getData()) as AudioData[];
  return (
    <div>
      <ScrollAnimation>
        <div className="bg-white pl-32 pt-10 grid md:grid-cols-3">
          {data.slice(0, 3).map((audio) => (
            <div key={audio.title}>
              <Link href="/">
                <AudioImage audio={audio} />
              </Link>
              <div className="flex gap-8 pt-4">
                <YoutubePlayer audio={audio} />
                {/* <a
                  href={audio.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsCameraVideo className="hover:text-pink-400" />
                </a> */}
                <div>
                  {/* LISTEN ICON */}
                  <AudioPlayerToggle audio={audio} />
                </div>
                <div>
                  <DownloadMessage audio={audio} />
                </div>
              </div>
              <div className="border-t border-gray-300 h-0 w-64 mt-4"></div>
              <p className="text-3xl font-bold text-pink-500 w-72 pt-8">
                {audio.title}
              </p>
              <p className="pt-4 pb-10 text-gray-700 text-sm font-normal leading-6 w-72">
                {audio.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Messages;
