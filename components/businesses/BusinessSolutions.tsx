"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Store, CheckCircle } from "lucide-react";

export function BusinessSolutions() {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "instore">(
    "ecommerce"
  );

  return (
    <div
      id="solutions"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            Solutions for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Business Model
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you sell online or in-store, we have you covered
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("ecommerce")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition ${
                activeTab === "ecommerce"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Code2 className="w-5 h-5" />
              E-Commerce Integration
            </button>
            <button
              onClick={() => setActiveTab("instore")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition ${
                activeTab === "instore"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Store className="w-5 h-5" />
              In-Store Kiosks
            </button>
          </div>
        </div>

        {/* E-Commerce Tab */}
        {activeTab === "ecommerce" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
                  Seamless API Integration
                </h3>
                <ul className="space-y-4">
                  {[
                    "Integrate in 2 hours with our REST API",
                    "Pre-built plugins for Shopify, WooCommerce, Magento",
                    "White-label customization options",
                    "Real-time size recommendations",
                    "Analytics dashboard included",
                    "99.9% uptime SLA guarantee",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <code className="text-sm text-blue-700 dark:text-blue-300 font-mono">
                    npm install @fitai/sdk
                  </code>
                </div>
              </div>

              <div className="space-y-6">
                <img
                  src="/assets/landing_image.png"
                  alt="E-commerce Integration"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 sm:p-8 rounded-2xl text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">25%</div>
                  <p className="text-blue-100">
                    Average conversion rate increase within first month
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* In-Store Tab */}
        {activeTab === "instore" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
                  Interactive Kiosk Solution
                </h3>
                <ul className="space-y-4">
                  {[
                    "Plug-and-play touchscreen kiosks",
                    "Works offline with cloud sync",
                    "Multi-location management portal",
                    "Customer data privacy-first design",
                    "Instant size recommendations",
                    "Hardware warranty & support included",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <p className="text-sm text-cyan-700 dark:text-cyan-300 font-semibold">
                    📍 Perfect for flagship stores and retail chains
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <img
                  src="/assets/landing_image.png"
                  alt="In-Store Kiosk"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 sm:p-8 rounded-2xl text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">40%</div>
                  <p className="text-cyan-100">
                    Reduction in fitting room traffic and wait times
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
