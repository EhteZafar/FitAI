"use client";

import {
  Zap,
  Shield,
  TrendingDown,
  Smartphone,
  Clock,
  CheckCircle,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get accurate fit predictions in seconds. Our AI analyzes your photos instantly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your photos are processed securely and never shared. Complete data protection.",
  },
  {
    icon: TrendingDown,
    title: "Reduce Returns",
    description:
      "Save time and money by ordering the right size the first time, every time.",
  },
  {
    icon: Smartphone,
    title: "Works Anywhere",
    description:
      "Use FitAI on any device - desktop, tablet, or smartphone. Shop on the go.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "No more trying on multiple sizes. Know your perfect fit before you buy.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "Reduce waste and carbon footprint by minimizing returns and unnecessary shipping.",
  },
  {
    icon: CheckCircle,
    title: "95% Accuracy",
    description:
      "Industry-leading AI technology ensures the most accurate fit predictions.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 dark:text-white">
            Why Choose <span className="text-cyan-500">FitAi</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Transform your online shopping experience with cutting-edge AI
            technology that eliminates sizing guesswork.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl transition bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 dark:text-white">
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
