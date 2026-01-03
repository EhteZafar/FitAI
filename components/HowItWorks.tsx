"use client";

import { Upload, Scan, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Photos",
    description:
      "Take or upload two clear photos of yourself - front and side view.",
  },
  {
    icon: Scan,
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes your body measurements and proportions instantly.",
  },
  {
    icon: CheckCircle,
    title: "See Perfect Fit",
    description:
      "View how clothing items will look and fit on you before making a purchase.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-b from-white to-cyan-50 dark:from-gray-900 dark:to-gray-800"
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
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              FitAI
            </span>{" "}
            Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Get your perfect fit in just three simple steps. It&apos;s fast,
            accurate, and incredibly easy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
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
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${
                    index === 0
                      ? "from-cyan-400 to-cyan-600"
                      : index === 1
                      ? "from-pink-400 to-pink-600"
                      : "from-yellow-400 to-yellow-600"
                  } rounded-full flex items-center justify-center shadow-xl`}
                >
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-semibold">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Example */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-100 to-pink-100 dark:from-cyan-900 dark:to-pink-900 flex items-center justify-center"
              style={{ minHeight: "300px" }}
            >
              <div className="text-center p-6 sm:p-8">
                <Upload className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-cyan-600 dark:text-cyan-400" />
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
                  Virtual Try-On Preview
                </p>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                  Upload your photos to see the perfect fit
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white dark:bg-gray-700 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Perfect Match
                  </div>
                  <div className="text-sm sm:text-base text-green-600 dark:text-green-400">
                    Size M Recommended
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl text-white shadow-xl">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">40%</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Reduction in Returns
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">30 sec</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Average Processing Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">100+</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Supported Brands
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
