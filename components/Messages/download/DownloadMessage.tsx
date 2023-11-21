
import { BsCloudDownload } from 'react-icons/bs';
interface DownloadMessageProps {
    audio: {
        file: string;
        title: string;
    };
    iconSize?: string;
}

export const DownloadMessage = ({audio, iconSize = '1rem'}: DownloadMessageProps) => {
    return(
        <div>
            <a
                href={`${audio.file}?dl=${audio.title}.mp3`}
                className="hover:text-pink-400 flex gap-4"
            >
                <BsCloudDownload style={{ fontSize: iconSize }} />
                {iconSize !== "1rem" ? <div>Download</div>: ""}
            </a>
        </div>
    ) 
}