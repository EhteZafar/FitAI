"use client";

import { Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ShopperCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500 to-pink-500 p-8 sm:p-12 lg:p-16 shadow-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>

          <div className="relative z-10 text-center text-white">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be the First to Experience Perfect Fit
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our MVP is launching soon! Get notified when FitAI becomes
              available at your favorite stores and online retailers.
            </motion.p>

            {/* Email Signup Area */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button className="px-6 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition shadow-lg font-bold whitespace-nowrap">
                  Get Notified
                </button>
              </div>
              <p className="mt-4 text-sm text-white/80">
                Join 1,000+ shoppers waiting for early access
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
