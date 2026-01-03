import { ShopperHero } from "@/components/shoppers/ShopperHero";
import { ShopperHowItWorks } from "@/components/shoppers/ShopperHowItWorks";
import { ShopperFeatures } from "@/components/shoppers/ShopperFeatures";
import { ShopperCTA } from "@/components/shoppers/ShopperCTA";
import { Footer } from "@/components/Footer";

export default function ShoppersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ShopperHero />
      <ShopperHowItWorks />
      <ShopperFeatures />
      <ShopperCTA />
      <Footer />
    </div>
  );
}
