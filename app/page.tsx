import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import HomeContent from "@/components/HomeContent/HomeContent";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";

export default function Home() {
  return (
    <div>
      <CustomSlider />
      <ScrollAnimation>
        <AudioPlayer />
        <HomeContent />
      </ScrollAnimation>
    </div>
  );
}
