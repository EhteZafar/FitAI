"use client";

import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.img
            src="/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png"
            alt="FitAI Logo"
            className="h-24 w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              Contact Us
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full mb-6">
              <span>✨ 40% Reduction in Returns</span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">
                Perfect Fit
              </span>{" "}
              Before You Buy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Upload two photos and see how any clothing item will fit you. Say
              goodbye to returns and sizing uncertainty with our AI-powered
              virtual try-on solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                Try It Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-600 transition">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1539278383962-a7774385fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGZhc2hpb258ZW58MXx8fHwxNzY1MjAxMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online shopping"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 -right-10 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
