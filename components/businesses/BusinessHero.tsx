"use client";

import { ArrowRight, Calendar, Play, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import { ShareButton } from "../ShareButton";
import Link from "next/link";
import { useState } from "react";

export function BusinessHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoUrl =
    "https://drive.google.com/file/d/198l4-qIdLG7x4cfONWwm8D-D2fPfa38b/preview";

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 ai-grid-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-300/5 via-purple-300/5 to-cyan-300/5 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
                src="/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png"
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
            <Link
              href="/shoppers"
              className="hidden md:block text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              For Shoppers
            </Link>
            <div className="hidden md:block">
              <ShareButton />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-cyan-900/50 rounded-full mb-4 sm:mb-6 text-sm sm:text-base font-semibold border border-blue-200/50 dark:border-blue-700/50 shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                🚀 MVP in Development • Become an Early Partner
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight dark:text-white font-bold">
              Reduce{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 animate-gradient">
                Clothing Returns
              </span>{" "}
              by 40% with AI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
              Give your customers accurate clothing size recommendations with
              our AI-powered body measurement technology. Available as in-store
              kiosks or online API integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base sm:text-lg rounded-lg hover:shadow-xl transition font-semibold flex items-center justify-center gap-2 btn-innovative animate-pulse-glow"
              >
                <Play className="w-5 h-5" />
                Watch Demo Video
              </button>
              <a
                href="#early-partner"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-base sm:text-lg rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition font-semibold flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Join Early Partner Program
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  AI
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Powered
              </div>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                MVP
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                In Development
              </div>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                Fast
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Integration
              </div>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                Early
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Partner Pricing
              </div>
            </motion.div>
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
