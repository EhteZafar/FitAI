"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";

export function BusinessHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
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
              href="#solutions"
              className="hidden sm:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="hidden sm:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Pricing
            </a>
            <Link
              href="/shoppers"
              className="hidden md:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              For Shoppers
            </Link>
            <ThemeToggle />
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm lg:text-base rounded-lg hover:shadow-lg transition font-semibold">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full mb-4 sm:mb-6 text-sm sm:text-base font-semibold">
              🚀 MVP in Testing • Become an Early Partner
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight dark:text-white font-bold">
              Virtual Try-On{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Technology
              </span>{" "}
              for Fashion Retailers
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
              AI-powered sizing solution designed to reduce returns and boost
              conversions. Test our MVP today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base sm:text-lg rounded-lg hover:shadow-xl transition font-semibold flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Request Demo
              </button>
              <a href="#pricing">
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-base sm:text-lg rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition font-semibold">
                  View Pricing
                </button>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                AI
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Powered
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                MVP
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                In Testing
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                Fast
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Integration
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                Early
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Partner Pricing
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
