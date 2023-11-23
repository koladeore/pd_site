import Link from "next/link";
import AudioImage from "../Messages/AudioImage/AudioImage";
import { DownloadMessage } from "../Messages/download/DownloadMessage";
import AudioPlayerToggle from "../Messages/AudioPlayerToggle/AudioPlayerToggle";
import YoutubePlayer from "../Messages/YoutubePlayer/YoutubePlayer";
import { AudioData } from "@/app/lib/interface";

interface AudioCardProps {
    audio: AudioData
}
const AudioCard = ({ audio }: AudioCardProps) => {
    return (
        <div key={audio.title}>
            <Link href={`/audio/${audio.slug.current}`}>
                <AudioImage audio={audio} />
            </Link>
            <div className="flex gap-8 pt-4">
                <YoutubePlayer audio={audio} />
                <div>
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
    )
}

export default AudioCard;