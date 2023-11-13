import React from "react";
import { BsCameraVideo } from 'react-icons/bs';
import { BsCloudDownload } from 'react-icons/bs';
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import AudioPlayerToggle from "./TogglePlayer";
interface AudioData {
  title: string;
  file: string;
  image: string;
  youtubeUrl: string;
 description: string;
}
const revalidate = 60;
async function getData() {
  const query = `*[_type == 'audioMessage']{ 
  title,
  description,  
  'file': audioFile.asset->url,
  'image': image.asset->url,
  youtubeUrl,
}`;
  const data = await client.fetch(query, {
    next: {
      revalidate: 10
    }
  });
  return data;
}
const AudioPlayer = async () => {
  const data = (await getData()) as AudioData[];
  return (
    <div className="pl-32 pt-10 grid md:grid-cols-3">
      {data.slice(0,3).map((audio) => (
        <div key={audio.title}>
          <Image
            src={urlFor(audio.image).url()}
            alt="Image"
            className=""
            width={250}
            height={250}
          />
          <div className="flex gap-8 pt-4">
            <a href={audio.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <BsCameraVideo className=""/>
            </a>
            <div>
              {/* LISTEN ICON */}
              <AudioPlayerToggle audio={audio}/>
            </div>
            <div>
              <a
              href={audio.file}
              download={`${audio.title}.mp3`}
              target="_blank"
              rel="noopener noreferrer"
              >
                <BsCloudDownload />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-300 h-0 w-64 mt-4"></div>
          <p className="text-3xl font-bold text-pink-500 w-72 pt-8">{audio.title}</p>
          <p className="pt-4 pb-10 text-gray-700 text-sm font-normal leading-6 w-72">{audio.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
