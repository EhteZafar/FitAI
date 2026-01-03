"use client";

import { ArrowRight, ShoppingBag, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function AudienceSelector() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/FitAI_logo_transparent.png"
              alt="FitAI Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </motion.div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-tight dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">
                AI-Powered
              </span>{" "}
               Cloth Fit
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
              Virtual try-on technology that eliminates sizing guesswork
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                MVP
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                In Testing
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                AI
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Powered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                30s
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Setup Time
              </div>
            </div>
          </motion.div>

          {/* Audience Selection Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* For Shoppers */}
            <Link href="/shoppers">
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white mt-4">
                  For Shoppers
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Find your perfect size and try on clothes virtually before you
                  buy
                </p>
                <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* For Businesses */}
            <Link href="/businesses">
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white mt-4">
                  For Businesses
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Reduce returns by 40% and increase conversions with our
                  enterprise solution
                </p>
                <div className="flex items-center text-pink-600 dark:text-pink-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
              Trusted by leading retailers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
              <div className="text-gray-400 dark:text-gray-500 font-semibold text-lg">
                ZALANDO
              </div>
              <div className="text-gray-400 dark:text-gray-500 font-semibold text-lg">
                H&M
              </div>
              <div className="text-gray-400 dark:text-gray-500 font-semibold text-lg">
                ZARA
              </div>
              <div className="text-gray-400 dark:text-gray-500 font-semibold text-lg">
                ASOS
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 dark:bg-cyan-800 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 dark:bg-pink-800 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}
