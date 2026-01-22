import { AudienceSelector } from "@/components/AudienceSelector";
import { VideoDemo } from "@/components/VideoDemo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AudienceSelector />
      <div id="video-demo">
        <VideoDemo />
      </div>
      <Footer />
    </div>
  );
}
