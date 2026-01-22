"use client";

import { Monitor, Globe, Zap, Camera, Ruler, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const options = [
  {
    icon: Monitor,
    title: "In-Store Kiosk",
    description:
      "Use our smart kiosks in participating stores. Scan yourself, browse products, and tap 'Check Fit' to get instant size recommendations.",
    color: "from-cyan-400 to-cyan-600",
    badge: "Physical Stores",
  },
  {
    icon: Globe,
    title: "Online Shopping",
    description:
      "Shop from home with our web integration. Upload your photos once, then get perfect fit recommendations across all partner brands.",
    color: "from-pink-400 to-pink-600",
    badge: "Web & Mobile",
  },
];

const process = [
  {
    icon: Camera,
    title: "Capture Your Profile",
    description: "Take front and side photos (fully clothed). Just 30 seconds.",
  },
  {
    icon: Ruler,
    title: "AI Analyzes Your Body",
    description:
      "Our AI measures your neck, chest, waist, hips, and 15+ other body points with 95% accuracy.",
  },
  {
    icon: ShoppingBag,
    title: "Get Perfect Size",
    description:
      "Browse any clothing item and tap 'Check Fit' to see your recommended size. No more guessing!",
  },
];

export function ShopperHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-cyan-50/30 dark:from-gray-900 dark:to-gray-800"
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
            Two Ways to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              Find Your Perfect Fit
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Whether you're shopping in-store or online, FitAI has you covered
          </p>
        </motion.div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300">
                {option.badge}
              </div>

              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <option.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl mb-4 dark:text-white font-bold">
                {option.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works Process */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 sm:mb-12 dark:text-white font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h3>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-700">
                    <span className="text-sm sm:text-base text-yellow-600 dark:text-yellow-400 font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl mb-3 sm:mb-4 dark:text-white font-semibold">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Feature Highlight */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-3xl mx-auto bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl p-8 sm:p-10 text-center text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            AI-Powered Precision
          </h3>
          <p className="text-base sm:text-lg text-white/90">
            Our technology analyzes your unique body measurements including neck
            size, chest, waist, hips, and more to recommend the perfect size for
            every garment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
