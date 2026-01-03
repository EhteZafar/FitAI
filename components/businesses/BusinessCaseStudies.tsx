"use client";

import { motion } from "framer-motion";
import { Quote, TrendingUp, Users, ShoppingBag } from "lucide-react";

export function BusinessCaseStudies() {
  const caseStudies = [
    {
      company: "StyleHub Fashion",
      industry: "Online Apparel Retailer",
      logo: "🛍️",
      metrics: [
        { label: "Return Rate", value: "42% → 18%", change: "-57%" },
        { label: "Conversion Rate", value: "1.8% → 2.4%", change: "+33%" },
        { label: "Revenue Impact", value: "+$2.1M", change: "annual" },
      ],
      quote:
        "FitAI paid for itself in the first month. Our return rate dropped dramatically and customer satisfaction scores went through the roof.",
      author: "Sarah Chen",
      role: "Head of E-Commerce",
      color: "from-blue-500 to-cyan-500",
      icon: ShoppingBag,
    },
    {
      company: "TrendWear Co.",
      industry: "Multi-Brand Fashion Marketplace",
      logo: "👗",
      metrics: [
        { label: "Cart Abandonment", value: "68% → 45%", change: "-34%" },
        { label: "Customer LTV", value: "+45%", change: "increase" },
        { label: "Support Tickets", value: "-62%", change: "sizing issues" },
      ],
      quote:
        "The integration was painless and the results were immediate. We saw a measurable improvement in conversions within the first week.",
      author: "Marcus Rodriguez",
      role: "CTO",
      color: "from-purple-500 to-pink-500",
      icon: TrendingUp,
    },
    {
      company: "FitFirst Retail",
      industry: "Athletic Wear Chain (42 stores)",
      logo: "🏃",
      metrics: [
        { label: "In-Store Sales", value: "+28%", change: "per location" },
        { label: "Fitting Room Traffic", value: "-40%", change: "reduction" },
        {
          label: "Customer Satisfaction",
          value: "4.2 → 4.8",
          change: "/5 stars",
        },
      ],
      quote:
        "Our in-store kiosks transformed the shopping experience. Customers love getting accurate sizes instantly, and our staff can focus on service.",
      author: "Jennifer Park",
      role: "VP of Retail Operations",
      color: "from-green-500 to-emerald-500",
      icon: Users,
    },
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            Success{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{study.logo}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">
                  {study.company}
                </h3>
                <p className="text-sm opacity-90">{study.industry}</p>
              </div>

              {/* Metrics */}
              <div className="p-6 space-y-4 bg-gray-50 dark:bg-gray-850">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        {metric.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="p-6">
                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{study.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${study.color} rounded-full flex items-center justify-center`}
                  >
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {study.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {study.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-12 sm:mt-16 p-8 sm:p-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to write your own success story?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Join 500+ retailers already using FitAI
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition text-lg">
            Schedule Your Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
}
