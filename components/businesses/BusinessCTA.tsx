"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";

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
            Ready to Test Our Technology?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Become an early partner and help shape the future of virtual try-on
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              "Free MVP access",
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl transition flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-6 h-6" />
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.button
              className="px-10 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </div>

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
