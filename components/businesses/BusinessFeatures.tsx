"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe2, Cog, TrendingUp } from "lucide-react";

export function BusinessFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Instant Integration",
      description:
        "Deploy in hours with our RESTful API or pre-built plugins for major e-commerce platforms",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Track conversion rates, return reduction, and ROI with real-time dashboards",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "GDPR & CCPA compliant with SOC 2 Type II certification. Your customer data is safe",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe2,
      title: "Multi-Location Support",
      description:
        "Manage hundreds of stores from one central dashboard with region-specific customization",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cog,
      title: "Flexible Customization",
      description:
        "White-label solution that matches your brand. Custom workflows for your business logic",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description:
        "Handle millions of requests with auto-scaling architecture. No downtime, ever",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            Enterprise-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Features
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to deliver a world-class sizing experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-850 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs */}
        <motion.div
          className="mt-16 sm:mt-20 p-8 sm:p-10 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                &lt;50ms
              </div>
              <div className="text-sm text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                10M+
              </div>
              <div className="text-sm text-gray-300">Requests/Day</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
