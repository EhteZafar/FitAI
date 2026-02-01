"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function BusinessAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/businesses"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Business Overview</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 rounded-full text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Investor Analytics
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white">
            FitAI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              Business Analytics
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial projections, ROI analysis, and revenue
            models for potential investors
          </p>
        </motion.div>

        {/* ROI Analysis Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
              Customer ROI Analysis
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <th className="text-left p-4 font-semibold">Metric</th>
                    <th className="text-right p-4 font-semibold">Before</th>
                    <th className="text-right p-4 font-semibold">After</th>
                    <th className="text-right p-4 font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Monthly Visitors
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      50,000
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      50,000
                    </td>
                    <td className="p-4 text-right text-gray-500 dark:text-gray-400">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Conversion Rate
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      2.0%
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      2.5%
                    </td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">
                      +25%
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Avg Order Value
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €79
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €79
                    </td>
                    <td className="p-4 text-right text-gray-500 dark:text-gray-400">
                      -
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Return Rate
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      30%
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      18%
                    </td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">
                      -40%
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750">
                    <td
                      colSpan={4}
                      className="p-2 text-xs text-gray-500 dark:text-gray-400 text-center"
                    >
                      Financial Impact
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Monthly Orders
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      1,000
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      1,250
                    </td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">
                      +250
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Monthly Revenue
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €79K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €99K
                    </td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">
                      +€20K
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Return Costs (65%)
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €15K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €11K
                    </td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">
                      -€4K
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <td className="p-4 font-bold text-gray-900 dark:text-white">
                      Monthly Benefit
                    </td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right text-2xl font-bold text-pink-600 dark:text-pink-400">
                      +€24K
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <td className="p-4 font-bold text-gray-900 dark:text-white">
                      Annual Benefit
                    </td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right text-2xl font-bold text-pink-600 dark:text-pink-400">
                      +€286K
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-750">
                    <td
                      colSpan={4}
                      className="p-2 text-xs text-gray-500 dark:text-gray-400 text-center"
                    >
                      ROI Calculation
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      FitAI Cost
                    </td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €1.8K/mo
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €22K/yr
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <td className="p-4 font-bold text-gray-900 dark:text-white text-lg">
                      Net Annual Savings
                    </td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right text-3xl font-bold text-green-600 dark:text-green-400">
                      €264K
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                    <td className="p-4 font-bold text-gray-900 dark:text-white text-lg">
                      ROI
                    </td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right"></td>
                    <td className="p-4 text-right text-4xl font-bold text-green-600 dark:text-green-400">
                      1,187%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Revenue Projections Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
              5-Year Revenue Projections
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <th className="text-left p-4 font-semibold">Metric</th>
                    <th className="text-right p-4 font-semibold">Year 1</th>
                    <th className="text-right p-4 font-semibold">Year 2</th>
                    <th className="text-right p-4 font-semibold">Year 3</th>
                    <th className="text-right p-4 font-semibold">Year 5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Total Customers
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      35
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      120
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      350
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      1,200
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      SaaS ARR
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €155K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €3.0M
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €9.1M
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €35M
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Kiosk Revenue
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €46K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €740K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €1.9M
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €6.0M
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Services Revenue
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €19K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €185K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €537K
                    </td>
                    <td className="p-4 text-right font-medium dark:text-white">
                      €1.7M
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <td className="p-4 font-bold text-gray-900 dark:text-white text-lg">
                      Total Revenue
                    </td>
                    <td className="p-4 text-right text-xl font-bold text-pink-600 dark:text-pink-400">
                      €220K
                    </td>
                    <td className="p-4 text-right text-xl font-bold text-pink-600 dark:text-pink-400">
                      €3.9M
                    </td>
                    <td className="p-4 text-right text-xl font-bold text-pink-600 dark:text-pink-400">
                      €11.6M
                    </td>
                    <td className="p-4 text-right text-xl font-bold text-pink-600 dark:text-pink-400">
                      €42.7M
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-4 text-gray-700 dark:text-gray-300">
                      Gross Margin
                    </td>
                    <td className="p-4 text-right font-medium text-green-600 dark:text-green-400">
                      65%
                    </td>
                    <td className="p-4 text-right font-medium text-green-600 dark:text-green-400">
                      72%
                    </td>
                    <td className="p-4 text-right font-medium text-green-600 dark:text-green-400">
                      78%
                    </td>
                    <td className="p-4 text-right font-medium text-green-600 dark:text-green-400">
                      82%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Scale Strategy Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
              Go-to-Market Scale Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-blue-500 dark:border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    MVP & Early Adopters
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Months 1-6
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                    Target: 25-35 Beta Customers
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Independent boutiques & DTC brands</li>
                    <li>• Direct Shopify/WooCommerce outreach</li>
                    <li>• Fashion tech accelerators</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-1">
                    Key Milestones
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>✓ 25 beta customers (free tier)</li>
                    <li>✓ 10 Early Partner conversions (€369/mo)</li>
                    <li>✓ 95%+ accuracy validation</li>
                    <li>✓ &lt;48h integration time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-purple-500 dark:border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Product-Market Fit
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Months 7-18
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="font-semibold text-purple-700 dark:text-purple-300 mb-1">
                    Target: 120 Paying Customers
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Mid-market retailers (50-500 employees)</li>
                    <li>• Multi-brand department stores</li>
                    <li>• Fast fashion chains (5-20 locations)</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-1">
                    Key Milestones
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>✓ €3.0M ARR</li>
                    <li>✓ 5 enterprise pilot programs</li>
                    <li>✓ 20 kiosk units deployed</li>
                    <li>✓ Unit economics profitability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-pink-500 dark:border-pink-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Market Expansion
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Months 19-36
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <div className="font-semibold text-pink-700 dark:text-pink-300 mb-1">
                    Target: 350+ Customers
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Enterprise chains (500+ employees)</li>
                    <li>• International markets (EU, Asia-Pacific)</li>
                    <li>• Adjacent verticals (sportswear, luxury)</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-1">
                    Key Milestones
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>✓ €11.6M ARR</li>
                    <li>✓ 3-5 enterprise contracts (€92K+ ACV)</li>
                    <li>✓ 150 kiosks deployed</li>
                    <li>✓ Expand to 3 international markets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-orange-500 dark:border-orange-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Market Leadership
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Years 3-5
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="font-semibold text-orange-700 dark:text-orange-300 mb-1">
                    Industry Standard for Virtual Fitting
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Acquire smaller competitors</li>
                    <li>• Vertical integration (AR try-on)</li>
                    <li>• Platform play (3rd party developers)</li>
                    <li>• Data network effects</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-1">
                    Key Milestones
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>✓ 1,200+ customers</li>
                    <li>✓ €42.7M+ ARR</li>
                    <li>✓ 40% market share (SMB segment)</li>
                    <li>✓ 500+ kiosks globally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500 to-pink-500 p-6 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              Competitive Moat & Advantages
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="font-bold mb-2">🛡️ Technology Moat</div>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Only 2 photos required vs 3D scanning</li>
                  <li>• 95%+ accuracy with continuous improvement</li>
                  <li>• Privacy-first (no photo storage)</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="font-bold mb-2">🌐 Network Effects</div>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• More users = better AI accuracy</li>
                  <li>• Platform approach (3rd party integrations)</li>
                  <li>• Cross-store shopping profile</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="font-bold mb-2">🔒 Switching Costs</div>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Deep platform integration (API, webhooks)</li>
                  <li>• White-label customization lock-in</li>
                  <li>• Proven ROI makes switching risky</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="font-bold mb-2">🚀 First-Mover Advantage</div>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Early e-commerce platform partnerships</li>
                  <li>• Brand recognition in fashion tech</li>
                  <li>• Customer success case studies</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Strategy Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
              Pricing Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MVP Pricing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Current MVP Pricing
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-blue-700 dark:text-blue-300">
                      Beta Access
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Free
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Early adopters, SME retailers
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-400 dark:border-purple-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-purple-700 dark:text-purple-300">
                      Early Partner
                    </span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      €369/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Growth-stage retailers • Lifetime discount
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-orange-700 dark:text-orange-300">
                      Enterprise MVP
                    </span>
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      Custom
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enterprise chains, multi-location
                  </p>
                </div>
              </div>
            </div>

            {/* Post-Launch Pricing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Post-Launch Pricing (Year 1+)
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-cyan-700 dark:text-cyan-300">
                      Starter
                    </span>
                    <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                      €739/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Up to 10K API calls/month
                  </p>
                </div>

                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border-2 border-pink-400 dark:border-pink-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-pink-700 dark:text-pink-300">
                      Professional
                    </span>
                    <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                      €1,849/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Up to 50K API calls/month
                  </p>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-indigo-700 dark:text-indigo-300">
                      Enterprise
                    </span>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      €4,619+/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Unlimited API calls, custom AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Unit Economics Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
              Unit Economics
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-2xl text-white shadow-xl">
              <div className="text-sm font-semibold mb-2 opacity-90">
                Customer Acquisition Cost
              </div>
              <div className="text-4xl font-bold mb-2">€2,220</div>
              <div className="text-sm opacity-90">Average (Year 2-3)</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white shadow-xl">
              <div className="text-sm font-semibold mb-2 opacity-90">
                Lifetime Value
              </div>
              <div className="text-4xl font-bold mb-2">€66,564</div>
              <div className="text-sm opacity-90">Per customer</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="text-sm font-semibold mb-2 opacity-90">
                LTV:CAC Ratio
              </div>
              <div className="text-4xl font-bold mb-2">30:1</div>
              <div className="text-sm opacity-90">Target 40:1 by Year 3+</div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-cyan-500 to-pink-500 p-8 sm:p-12 rounded-2xl text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Download our complete investor pitch deck or schedule a demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/businesses"
              className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Back to Business Overview
            </Link>
            <a
              href="https://drive.google.com/file/d/1TB7gfXW3ese0cfegtOVUk9ffguhhRrbe/view?usp=sharing"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition"
            >
              Download Full Pitch Deck
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
