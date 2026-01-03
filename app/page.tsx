import { AudienceSelector } from "@/components/AudienceSelector";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AudienceSelector />
      <Footer />
    </div>
  );
}
