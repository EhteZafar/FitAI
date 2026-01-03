"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  ShoppingCart,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

export function BusinessProblem() {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            The Hidden Cost of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Poor Sizing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Size uncertainty is killing your bottom line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-4">
              <RotateCcw className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-red-600 dark:text-red-400">
              $550B
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Annual Return Costs
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fashion retailers globally lose $550B to returns—62% due to sizing
              issues
            </p>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl border border-orange-200 dark:border-orange-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600 dark:text-orange-400">
              70%
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Cart Abandonment
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              7 out of 10 shoppers abandon their cart due to size uncertainty
            </p>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-900/20 dark:to-red-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <TrendingDown className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-yellow-600 dark:text-yellow-500">
              40%
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Return Rate
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Online fashion returns are 4x higher than in-store purchases
            </p>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl border border-pink-200 dark:border-pink-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-pink-600 dark:text-pink-400">
              30%
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Margin Impact
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Returns can reduce profit margins by up to 30% for online
              retailers
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 p-8 sm:p-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            What if you could solve all of this with one integration?
          </h3>
          <p className="text-lg sm:text-xl text-blue-100">
            FitAI reduces returns, increases conversions, and improves customer
            satisfaction—all in one solution
          </p>
        </motion.div>
      </div>
    </div>
  );
}
