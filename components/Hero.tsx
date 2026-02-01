"use client";

import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import Link from "next/link";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.img
            src="/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png"
            alt="FitAI Logo"
            className="h-16 sm:h-20 md:h-24 w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <a
              href="#features"
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              Contact Us
            </a>
            <Link
              href="/demo"
              className="text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-medium hover:opacity-80 transition flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-cyan-500" />
              Try Demo
            </Link>
            <ThemeToggle />
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm lg:text-base rounded-lg hover:shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2"
                >
                  How It Works
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2"
                >
                  Contact Us
                </a>
                <Link
                  href="/demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-medium py-2 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  Try Demo
                </Link>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition text-center">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              <span>✨ 40% Reduction in Returns</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight dark:text-white">
              Try On{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">
                Clothes Virtually
              </span>
              , Shop With Confidence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Upload two photos and see how any clothing item will fit you. Say
              goodbye to returns and sizing uncertainty with our AI-powered
              virtual try-on solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm sm:text-base rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                Try It Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <Link
                href="/demo"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm sm:text-base rounded-lg hover:border-cyan-400 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition text-center"
              >
                Try Interactive Demo
              </Link>
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
