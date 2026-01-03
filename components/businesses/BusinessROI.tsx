"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

export function BusinessROI() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(50000);
  const [avgOrderValue, setAvgOrderValue] = useState(85);
  const [currentReturnRate, setCurrentReturnRate] = useState(30);

  // Calculations
  const currentMonthlyOrders = monthlyVisitors * 0.02; // 2% baseline conversion
  const currentReturns = currentMonthlyOrders * (currentReturnRate / 100);
  const currentReturnCost = currentReturns * avgOrderValue * 0.65; // 65% cost per return

  const newConversionRate = 0.025; // 25% increase = 2.5%
  const newReturnRate = currentReturnRate * 0.6; // 40% reduction
  const newMonthlyOrders = monthlyVisitors * newConversionRate;
  const newReturns = newMonthlyOrders * (newReturnRate / 100);
  const newReturnCost = newReturns * avgOrderValue * 0.65;

  const additionalRevenue =
    (newMonthlyOrders - currentMonthlyOrders) * avgOrderValue;
  const returnSavings = currentReturnCost - newReturnCost;
  const totalMonthlySavings = additionalRevenue + returnSavings;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <div
      id="roi"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
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
            Estimate Potential{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Savings
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate how much our virtual try-on solution could save your
            business
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Calculator Input */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white">
                  Your Numbers
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Monthly Website Visitors
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {monthlyVisitors.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Average Order Value ($)
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="300"
                    step="5"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="mt-2 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    ${avgOrderValue}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Current Return Rate (%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={currentReturnRate}
                    onChange={(e) =>
                      setCurrentReturnRate(Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="mt-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {currentReturnRate}%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 sm:p-10 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Projected Savings
                  </h3>
                </div>
                <div className="text-5xl sm:text-6xl font-bold mb-2">
                  ${Math.round(annualSavings).toLocaleString()}
                </div>
                <p className="text-green-100 text-lg">per year</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold mb-4 dark:text-white">
                  Breakdown
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-300">
                      Additional Revenue
                    </span>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${Math.round(additionalRevenue * 12).toLocaleString()}/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-300">
                      Return Cost Savings
                    </span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      ${Math.round(returnSavings * 12).toLocaleString()}/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Monthly Benefit
                    </span>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      ${Math.round(totalMonthlySavings).toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl text-white text-center">
                <p className="text-sm font-semibold mb-2">ROI Timeline</p>
                <p className="text-3xl font-bold">
                  {Math.ceil(2000 / totalMonthlySavings)} months
                </p>
                <p className="text-sm text-blue-100 mt-1">
                  to break even on Starter plan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
