import { BusinessHero } from "@/components/businesses/BusinessHero";
import { BusinessProblem } from "@/components/businesses/BusinessProblem";
import { BusinessSolutions } from "@/components/businesses/BusinessSolutions";
import { BusinessFeatures } from "@/components/businesses/BusinessFeatures";
import { BusinessROI } from "@/components/businesses/BusinessROI";
import { BusinessCTA } from "@/components/businesses/BusinessCTA";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { Footer } from "@/components/Footer";

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BusinessHero />
      <BusinessProblem />
      <BusinessSolutions />
      <BusinessFeatures />
      <ComparisonMatrix />
      <BusinessROI />
      <BusinessCTA />
      <Footer />
    </div>
  );
}
