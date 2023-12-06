import { client } from "@/app/lib/sanity";
import { AudioData } from "../lib/interface";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import AudioCard from "@/components/AudioCard/AudioCard";

async function getData() {
    try {
        const query = `*[_type == 'audioMessage']{ 
      title,
      description,  
      'file': audioFile.asset->url,
      'image': image.asset->url,
      youtubeUrl,
      slug
    }`;
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

const allMessages = async () => {
    try {
        const data = (await getData()) as AudioData[];
        return (
            <div className="bg-white">
                <ScrollAnimation>
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-gray-700 text-3xl font-bold pt-10">LATEST SERMON</h1>
                        <p className="pt-4 text-gray-400 text-xl md:pl-0 pl-10">And we all, with unveiled face, beholding the glory of the Lord,</p>
                        <p className="pt-0 text-gray-400 text-xl md:pl-0 pl-10">are being transformed into the same image from one degree of glory to another.</p>
                    </div>
                    <div className="bg-white pl-16 md:pl-32 pt-10 grid md:grid-cols-3">
                        {data.map((audio) => (
                            <AudioCard key={audio.title} audio={audio} />
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        );
    } catch (error) {
        console.error("Error in allMessages component:", error);
        return <div>Error loading all messages</div>;
    }
};

export default allMessages;
