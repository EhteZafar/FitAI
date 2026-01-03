"use client";

import {
  Zap,
  Shield,
  Smartphone,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Sizing",
    description:
      "Advanced machine learning algorithms analyze your body measurements for accurate fit predictions.",
  },
  {
    icon: Sparkles,
    title: "Virtual Try-On Prototype",
    description:
      "Test our MVP technology that shows how clothes will fit your unique body shape.",
  },
  {
    icon: Users,
    title: "Multi-Brand Support",
    description:
      "Get size recommendations across multiple clothing brands with a single scan.",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description:
      "Your photos are processed securely and never stored. We take your privacy seriously.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Ready",
    description:
      "Access our beta from any device - desktop, tablet, or smartphone.",
  },
  {
    icon: CheckCircle2,
    title: "Free Beta Access",
    description:
      "Be among the first to try our technology. No payment required during testing phase.",
  },
];

export function ShopperFeatures() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-cyan-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 dark:text-white font-bold">
            Why Shoppers Love <span className="text-cyan-500">FitAI</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            The smartest way to shop for clothes online
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${
                  index % 3 === 0
                    ? "from-cyan-400 to-cyan-600"
                    : index % 3 === 1
                    ? "from-pink-400 to-pink-600"
                    : "from-yellow-400 to-yellow-600"
                } rounded-lg flex items-center justify-center mb-4 shadow-md`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 dark:text-white font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
