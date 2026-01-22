"use client";

import { Play, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function VideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl =
    "https://drive.google.com/file/d/198l4-qIdLG7x4cfONWwm8D-D2fPfa38b/preview";

  return (
    <>
      {/* Video Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 rounded-full mb-6 border border-cyan-200 dark:border-cyan-700">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                See the Future of Shopping
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 dark:text-white font-bold">
              Watch{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">
                FitAI
              </span>{" "}
              in Action
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience our revolutionary AI-powered virtual try-on technology.
              This is a preview of what&apos;s coming in our MVP.
            </p>
          </motion.div>

          {/* Video Thumbnail Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300"
              onClick={() => setIsOpen(true)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/90 via-pink-500/90 to-yellow-500/90 dark:from-cyan-600/90 dark:via-pink-600/90 dark:to-yellow-600/90 z-10"></div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptLTYgNmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center py-24 sm:py-32 md:py-40 px-8">
                {/* Play Button */}
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 ml-1" />
                  </div>
                </motion.div>

                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
                  FitAI Demo Video
                </h3>
                <p className="text-white/80 text-sm sm:text-base text-center max-w-md">
                  Click to watch how our AI technology transforms online
                  shopping
                </p>

                {/* MVP Badge */}
                <div className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <span className="text-white text-sm font-medium">
                    🚀 MVP Preview
                  </span>
                </div>
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 blur-xl opacity-50"></div>
              </div>
            </div>
          </motion.div>

          {/* Features under video */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                AI
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Powered Tech
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                Real-time
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Processing
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                Accurate
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Predictions
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video Embed */}
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
    </>
  );
}
