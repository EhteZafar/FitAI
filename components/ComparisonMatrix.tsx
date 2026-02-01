"use client";
import React from "react";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type FeatureValue = "yes" | "no" | "partial";

interface Feature {
  name: string;
  category: string;
  fitai: FeatureValue;
  trueFit: FeatureValue;
  fitAnalytics: FeatureValue;
  threeDLook: FeatureValue;
}

const features: Feature[] = [
  {
    name: "Only 2 Photos Required (Front & Side)",
    category: "Key Features",
    fitai: "yes",
    trueFit: "no",
    fitAnalytics: "no",
    threeDLook: "partial",
  },
  {
    name: "Virtual Try-On Visualization",
    category: "Key Features",
    fitai: "yes",
    trueFit: "no",
    fitAnalytics: "no",
    threeDLook: "yes",
  },
  {
    name: "In-Store Kiosk Solution",
    category: "Key Features",
    fitai: "yes",
    trueFit: "no",
    fitAnalytics: "no",
    threeDLook: "yes",
  },
  {
    name: "Privacy-First (No Photo Storage)",
    category: "Key Features",
    fitai: "yes",
    trueFit: "partial",
    fitAnalytics: "partial",
    threeDLook: "partial",
  },
];

const competitors = [
  {
    name: "FitAI",
    key: "fitai" as const,
    color: "from-cyan-500 to-pink-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/30",
    borderColor: "border-cyan-500",
    description: "AI-powered virtual try-on",
  },
  {
    name: "True Fit",
    key: "trueFit" as const,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderColor: "border-blue-400",
    description: "Data-driven fit recommendations",
  },
  {
    name: "Fit Analytics",
    key: "fitAnalytics" as const,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderColor: "border-purple-400",
    description: "Size recommendation engine",
  },
  {
    name: "3DLOOK",
    key: "threeDLook" as const,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
    borderColor: "border-orange-400",
    description: "3D body scanning",
  },
];

const FeatureIcon = ({ value }: { value: FeatureValue }) => {
  if (value === "yes") {
    return (
      <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
        <Minus className="w-4 h-4 text-white" strokeWidth={3} />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 bg-red-400 rounded-full flex items-center justify-center">
      <X className="w-4 h-4 text-white" strokeWidth={3} />
    </div>
  );
};

export function ComparisonMatrix() {
  const categories = [...new Set(features.map((f) => f.category))];

  // Calculate scores
  const calculateScore = (
    key: "fitai" | "trueFit" | "fitAnalytics" | "threeDLook",
  ) => {
    return features.reduce((acc, feature) => {
      if (feature[key] === "yes") return acc + 1;
      if (feature[key] === "partial") return acc + 0.5;
      return acc;
    }, 0);
  };

  const scores = {
    fitai: calculateScore("fitai"),
    trueFit: calculateScore("trueFit"),
    fitAnalytics: calculateScore("fitAnalytics"),
    threeDLook: calculateScore("threeDLook"),
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              FitAI
            </span>{" "}
            Compares
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how FitAI stacks up against other sizing solutions in the market
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Full Support
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <Minus className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Partial/Limited
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
              <X className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Not Available
            </span>
          </div>
        </motion.div>

        {/* Score Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {competitors.map((competitor, index) => (
            <div
              key={competitor.key}
              className={`p-4 sm:p-6 rounded-xl border-2 ${
                competitor.key === "fitai"
                  ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-pink-50 dark:from-cyan-900/30 dark:to-pink-900/30"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              }`}
            >
              <div className="text-center">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1 ${
                    competitor.key === "fitai"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                      : "dark:text-white"
                  }`}
                >
                  {competitor.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {competitor.description}
                </p>
                <div
                  className={`text-3xl sm:text-4xl font-bold ${
                    competitor.key === "fitai"
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {scores[competitor.key]}/{features.length}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Feature Score
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <table className="w-full min-w-[700px]">
            {/* Header */}
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200 w-[280px]">
                  Features
                </th>
                {competitors.map((competitor) => (
                  <th
                    key={competitor.key}
                    className={`p-4 text-center font-semibold ${
                      competitor.key === "fitai"
                        ? "bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 text-cyan-700 dark:text-cyan-300"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <span
                      className={
                        competitor.key === "fitai"
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600"
                          : ""
                      }
                    >
                      {competitor.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category}>
                  {/* Category Header */}
                  <tr
                    key={`category-${category}`}
                    className="bg-gray-50 dark:bg-gray-800/50"
                  >
                    <td
                      colSpan={5}
                      className="p-3 font-bold text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {category}
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {features
                    .filter((f) => f.category === category)
                    .map((feature, idx) => (
                      <tr
                        key={feature.name}
                        className={`border-b border-gray-100 dark:border-gray-700/50 ${
                          idx % 2 === 0
                            ? "bg-white dark:bg-gray-900"
                            : "bg-gray-50/50 dark:bg-gray-800/30"
                        } hover:bg-cyan-50/30 dark:hover:bg-cyan-900/20 transition-colors`}
                      >
                        <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">
                          {feature.name}
                        </td>
                        {competitors.map((competitor) => (
                          <td
                            key={`${feature.name}-${competitor.key}`}
                            className={`p-4 text-center ${
                              competitor.key === "fitai"
                                ? "bg-cyan-50/30 dark:bg-cyan-900/10"
                                : ""
                            }`}
                          >
                            <div className="flex justify-center">
                              <FeatureIcon value={feature[competitor.key]} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to experience the most advanced virtual fitting solution?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition"
            >
              Try FitAI Demo
            </a>
            <a
              href="/businesses"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-cyan-500 dark:hover:border-cyan-500 transition"
            >
              For Businesses
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
