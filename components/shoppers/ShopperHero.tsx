"use client";

import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";

export function ShopperHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="cursor-pointer"
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
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="#how-it-works"
              className="hidden sm:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="hidden sm:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              Features
            </a>
            <Link
              href="/businesses"
              className="hidden md:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              For Businesses
            </Link>
            <ThemeToggle />
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm lg:text-base rounded-lg hover:shadow-lg transition">
              Try Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              <span>🚀 MVP Beta • Be Among the First to Try</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">
                Try On Clothes Virtually
              </span>
              , Shop With Confidence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Test our AI-powered sizing prototype. Upload two photos and get
              instant size recommendations across multiple clothing brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm sm:text-base rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2 font-semibold">
                Try It Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <a href="#how-it-works">
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm sm:text-base rounded-lg hover:border-cyan-400 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition w-full sm:w-auto">
                  How It Works
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/assets/landing_image.png"
                alt="Virtual try-on clothing demonstration"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-6 sm:top-10 -left-6 sm:-left-10 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-cyan-200 dark:bg-cyan-800 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
            <div className="absolute bottom-6 sm:bottom-10 -right-6 sm:-right-10 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-cyan-300 dark:bg-cyan-700 rounded-full blur-3xl opacity-40 dark:opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
