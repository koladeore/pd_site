
import { BsCloudDownload } from 'react-icons/bs';

export const DownloadMessage = ({audio}: any) => {
    return <a
        href={`${audio.file}?dl=${audio.title}.mp3`}
        className="hover:text-pink-400"
    >
        <BsCloudDownload />
    </a>
}