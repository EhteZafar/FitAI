"use client";

import { Upload, Scan, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload Two Photos",
    description:
      "Take a front and side photo, fully clothed. Takes just 30 seconds.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Scan,
    title: "Get Your Measurements",
    description:
      "Our AI analyzes 15+ body points with 95% accuracy, instantly.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: ShoppingCart,
    title: "Shop With Confidence",
    description:
      "See your exact size across 100+ brands. No more guessing or returns.",
    color: "from-yellow-400 to-yellow-600",
  },
];

export function ShopperHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
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
            Get Your Perfect Fit in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              30 Seconds
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Simple, fast, and incredibly accurate. No measurements needed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative inline-block mb-4 sm:mb-6">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl`}
                >
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-700">
                  <span className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 dark:text-white font-semibold">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-base sm:text-lg rounded-lg hover:shadow-xl transition font-semibold">
            Start Now - It's Free
          </button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            No account required • Works on any device
          </p>
        </motion.div>
      </div>
    </section>
  );
}
