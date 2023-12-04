import React from "react";
import { client } from "@/app/lib/sanity";
import { DownloadMessage } from "./download/DownloadMessage";
import Link from "next/link";
import AudioImage from "./AudioImage/AudioImage";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { AudioData } from "@/app/lib/interface";
import AudioPlayerToggle from "./AudioPlayerToggle/AudioPlayerToggle";
import YoutubePlayer from "./YoutubePlayer/YoutubePlayer";
import AudioCard from "../AudioCard/AudioCard";

async function getData() {
  const query = `*[_type == 'audioMessage']{ 
    title,
    description,  
    'file': audioFile.asset->url,
    'image': image.asset->url,
    youtubeUrl,
    slug
  }`;
  try {
    const data = await client.fetch(query, {
      next: {
        revalidate: 0,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Messages = async () => {
  try {
    const data = (await getData()) as AudioData[];
    const slicedData = data.slice(0, 3);
    return (
      <div>
        <ScrollAnimation>
          <div className="bg-white pl-32 pt-10 grid md:grid-cols-3">
            {slicedData.map((audio) => (
              <AudioCard key={audio.title} audio={audio} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    );
  } catch (error) {
    console.error("Error in Messages component:", error);
    return <div>Error loading messages</div>;
  }
};

export default Messages;
