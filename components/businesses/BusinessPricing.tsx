"use client";

import { motion } from "framer-motion";
import { Check, Zap, Building2, Sparkles } from "lucide-react";

export function BusinessPricing() {
  const plans = [
    {
      name: "Beta Access",
      icon: Zap,
      price: "Free",
      period: "during MVP",
      description: "Test our prototype and provide feedback",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Full API access during beta",
        "Integration support",
        "Email support",
        "Analytics dashboard",
        "Early feature access",
        "Influence product roadmap",
      ],
      cta: "Request Beta Access",
      popular: false,
    },
    {
      name: "Early Partner",
      icon: Building2,
      price: "$399",
      period: "/month",
      description: "Lock in preferred pricing as an early adopter",
      color: "from-purple-500 to-pink-500",
      features: [
        "Priority feature development",
        "Advanced API + webhooks",
        "Dedicated partner support",
        "Advanced analytics access",
        "White-label customization",
        "Direct founder access",
        "Lifetime partner discount",
        "Shape the product with us",
      ],
      cta: "Become a Partner",
      popular: true,
    },
    {
      name: "Enterprise MVP",
      icon: Sparkles,
      price: "Custom",
      period: "pricing",
      description: "Custom MVP deployment for your business",
      color: "from-orange-500 to-red-500",
      features: [
        "Custom integration development",
        "Dedicated engineering support",
        "Co-development opportunities",
        "Advanced security setup",
        "Multi-location pilot program",
        "Hardware prototypes available",
        "Custom AI model training",
        "Founding partner benefits",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <div
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day
            free trial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 overflow-hidden ${
                plan.popular
                  ? "border-purple-500 dark:border-purple-400"
                  : "border-gray-200 dark:border-gray-700"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl"
                      : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            MVP testing phase - Early partners get lifetime discounts
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-500">
            <span>✓ Free beta option available</span>
            <span>✓ No long-term commitment</span>
            <span>✓ Founding partner benefits</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
