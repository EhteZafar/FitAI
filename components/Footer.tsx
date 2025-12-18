"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="inline-block bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400 p-1 rounded-2xl mb-4 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl p-4">
                <img
                  src="/assets/d0c09af98181b3febb2241c75f60c335a9ddfd5f.png"
                  alt="FitAI Logo"
                  className="h-24 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered virtual try-on technology that helps you find the
              perfect fit every time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
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
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
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
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-3">
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

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FitAi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
