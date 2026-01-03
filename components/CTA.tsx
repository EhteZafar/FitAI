"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Find Your Perfect Fit?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-cyan-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join thousands of shoppers who have already discovered the
              confidence of knowing their perfect size before they buy.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-cyan-600 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base rounded-lg hover:bg-white hover:text-cyan-600 transition shadow-lg">
                Schedule Demo
              </button>
            </motion.div>
            <motion.p
              className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-cyan-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              No credit card required • Free for 14 days • Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
