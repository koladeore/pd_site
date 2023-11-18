import { AudioData } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string){
    const query = `*[_type == 'audioMessage' && slug.current == '${slug}'][0]`
    const data = await client.fetch(query);
    return data;
}
const AudioPage = async ({params}: {
   params: { slug: string  } 
}) => {
    const audio = (await getData(params.slug)) as AudioData;
    const audioFileRef = audio.audioFile.asset._ref;
    const audioFile = await client.fetch(`*[_id == '${audioFileRef}']{url}[0].url`);
    return (
        <div className="bg-white pt-36 pb-24">
            <div className="flex items-center justify-center">
                <div className="max-w-md mx-auto rounded-md">
                    <audio controls autoPlay className="w-96 bg-pink-500 text-white rounded-md">
                        <source src={audioFile} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
    )
}
export default AudioPage;
