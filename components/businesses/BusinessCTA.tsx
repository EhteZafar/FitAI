"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, CheckCircle, BarChart3 } from "lucide-react";
import Link from "next/link";

export function BusinessCTA() {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Join Our Early Partner Program
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our MVP is currently in development. Be among the first clothing
            retailers to get notified when we launch.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              "Free MVP testing",
              "Early partner pricing",
              "Shape the product",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center gap-2 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Email Signup */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2 whitespace-nowrap">
                Get Notified
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-3 text-center">
              💡 MVP launching soon • Be the first to know
            </p>
          </motion.div>

          {/* Analytics Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/businesses/analytics">
              <button className="px-8 py-4 bg-white/10 border-2 border-white/50 text-white rounded-lg font-bold hover:bg-white/20 transition flex items-center justify-center gap-2 mx-auto backdrop-blur-sm">
                <BarChart3 className="w-5 h-5" />
                View Detailed Analytics & ROI
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <p className="text-sm text-blue-100 mt-3 text-center">
              📊 Complete financial projections & investor metrics
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                MVP
              </div>
              <div className="text-sm text-blue-100">In Testing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                AI
              </div>
              <div className="text-sm text-blue-100">Powered Tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                40%
              </div>
              <div className="text-sm text-blue-100">Projected Return Cut</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                25%
              </div>
              <div className="text-sm text-blue-100">Potential Conv. Lift</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
