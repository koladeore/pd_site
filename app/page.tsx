import Messages from "@/components/Messages/Messages";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import HomeContent from "@/components/HomeContent/HomeContent";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";

export default function Home() {
  return (
    <div>
      <CustomSlider />
      <ScrollAnimation>
        <Messages />
        <HomeContent />
      </ScrollAnimation>
    </div>
  );
}
