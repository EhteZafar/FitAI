"use client";

import { ArrowRight, Play, Sparkles, X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";
import { useState } from "react";

export function ShopperHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoUrl =
    "https://drive.google.com/file/d/198l4-qIdLG7x4cfONWwm8D-D2fPfa38b/preview";

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900 ai-grid-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
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
            <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm lg:text-base rounded-lg hover:shadow-lg transition btn-innovative">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 rounded-full mb-4 sm:mb-6 text-sm sm:text-base border border-cyan-200/50 dark:border-cyan-700/50"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-700 dark:text-cyan-300 font-medium">
                🚀 MVP Coming Soon • Join the Waitlist
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight dark:text-white font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-gradient">
                Try On Clothes Virtually
              </span>
              , Shop With Confidence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Experience the future of online shopping. Our AI-powered sizing
              prototype gives you instant, accurate size recommendations across
              multiple clothing brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm sm:text-base rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2 font-semibold btn-innovative animate-pulse-glow">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Join Waitlist
              </button>
              <button
                onClick={() => setVideoOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm sm:text-base rounded-lg hover:border-cyan-400 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 dark:border-gray-700/50">
              <ImageWithFallback
                src="/assets/landing_image.png"
                alt="Virtual try-on clothing demonstration"
                className="w-full h-auto object-cover"
              />
              {/* MVP Overlay Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-white text-sm font-medium shadow-lg">
                MVP Preview
              </div>
            </div>
            <motion.div
              className="absolute top-6 sm:top-10 -left-6 sm:-left-10 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-cyan-200 dark:bg-cyan-800 rounded-full blur-3xl opacity-50 dark:opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-6 sm:bottom-10 -right-6 sm:-right-10 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-pink-300 dark:bg-pink-700 rounded-full blur-3xl opacity-40 dark:opacity-30"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={() => setVideoOpen(false)}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="FitAI Demo Video"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
