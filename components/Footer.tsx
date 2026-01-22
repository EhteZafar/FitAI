"use client";

import { Facebook, Twitter, Instagram, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="inline-block bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400 p-1 rounded-2xl mb-4 shadow-2xl">
              <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-3 sm:p-4">
                <img
                  src="/assets/d0c09af98181b3febb2241c75f60c335a9ddfd5f.png"
                  alt="FitAI Logo"
                  className="h-16 sm:h-20 md:h-24 w-auto"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              AI-powered virtual try-on technology that helps you find the
              perfect fit every time.
            </p>
            {/* MVP Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full border border-cyan-500/30 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-cyan-300 font-medium">
                MVP Coming Soon
              </span>
            </motion.div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white transition"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white transition"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white transition"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4 font-semibold">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4 font-semibold">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4 font-semibold">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white dark:hover:text-cyan-400 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>
            &copy; 2026 FitAI. All rights reserved. | Built with ❤️ in Dresden,
            Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
