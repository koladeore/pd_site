import React, { useState, useRef, useEffect } from "react";
// import { BsArrowLeftShort } from 'react-icons/bs';
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";

interface AudioData {
  title: string;
  file: string;
  image: string;
  youtubeUrl: string;
 description: string;
}
async function getData() {
  const query = `*[_type == 'audioMessage']{ 
  title,
  description,  
  'file': audioFile.asset->url,
  'image': image.asset->url,
  youtubeUrl,
}`;
  const data = await client.fetch(query);
  return data;
}
const AudioPlayer = async () => {
  const data = (await getData()) as AudioData[];
  return (
    <div>
      {data.map((audio) => (
        <div key={audio.title}>
          <p>{audio.title}</p>
          <p>{audio.description}</p>
            <a href={audio.youtubeUrl} target="_blank" rel="noopener noreferrer">youtubeUrl</a>
          <Image
            src={urlFor(audio.image).url()}
            alt="Image"
            className="rounded-lg"
            width={400}
            height={400}
          />
          <div className="w-72">
            <div>
              <audio controls>
                <source src={audio.file} type="audio/mpeg" />
              </audio>
              <br />
              <a
                href={audio.file}
                download={`${audio.title}.mp3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
