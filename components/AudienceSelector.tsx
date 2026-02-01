"use client";

import {
  ArrowRight,
  ShoppingBag,
  Building2,
  Sparkles,
  Zap,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { ShareButton } from "./ShareButton";
import Link from "next/link";

export function AudienceSelector() {
  const scrollToVideo = () => {
    document
      .getElementById("video-demo")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900 ai-grid-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/10 via-pink-300/10 to-yellow-300/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png"
              alt="FitAI Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToVideo}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ShareButton />
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* MVP Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 via-pink-100 to-yellow-100 dark:from-cyan-900/50 dark:via-pink-900/50 dark:to-yellow-900/50 rounded-full mb-6 border border-cyan-200/50 dark:border-cyan-700/50 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                🚀 MVP Coming Soon • Be the First to Experience
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-tight dark:text-white font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-gradient">
                Virtual Try-On
              </span>{" "}
              <br className="hidden sm:block" />
              for Clothes, Powered by AI
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
              See how clothes fit your body before buying. No more wrong sizes,
              no more returns.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400">
                  MVP
                </span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                In Development
              </div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400">
                  AI
                </span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Powered
              </div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                30s
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Setup Time
              </div>
            </motion.div>
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
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white mt-4">
                    For Shoppers
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Find your perfect size and try on clothes virtually before
                    you buy. Join the waitlist!
                  </p>
                  <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* For Businesses */}
            <Link href="/businesses">
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent dark:from-pink-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white mt-4">
                    For Businesses
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Reduce returns by 40% and increase conversions. Become an
                    early partner!
                  </p>
                  <div className="flex items-center text-pink-600 dark:text-pink-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Request Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
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
              Designed for integration with leading retailers
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
    </div>
  );
}
