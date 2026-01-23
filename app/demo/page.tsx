"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Upload,
  CheckCircle,
  ArrowRight,
  Sparkles,
  User,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock measurement results
const mockMeasurements = {
  neck: "38 cm",
  chest: "96 cm",
  waist: "82 cm",
  hips: "98 cm",
  shoulder: "45 cm",
  armLength: "62 cm",
  inseam: "81 cm",
  thigh: "56 cm",
};

type Step = "select" | "analyzing" | "results";

export default function DemoPage() {
  const [step, setStep] = useState<Step>("select");
  const [selectedImages, setSelectedImages] = useState<{
    front: boolean;
    side: boolean;
  }>({ front: false, side: false });
  const [analyzingProgress, setAnalyzingProgress] = useState(0);

  const handleImageSelect = (type: "front" | "side") => {
    setSelectedImages((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const startAnalysis = () => {
    if (selectedImages.front && selectedImages.side) {
      setStep("analyzing");
      setAnalyzingProgress(0);

      // Simulate AI processing
      const interval = setInterval(() => {
        setAnalyzingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep("results"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 80);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold dark:text-white">
              FitAI <span className="text-cyan-500">Demo</span>
            </span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="hidden sm:inline">Interactive Demo</span>
            <div className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/50 dark:to-pink-900/50 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-300">
              Mock Mode
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {step === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Upload Photos
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="text-sm text-gray-400">AI Analysis</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="text-sm text-gray-400">Results</span>
                </div>
              </div>

              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                  Upload Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                    Photos
                  </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  Select both front and side photos to get accurate body
                  measurements. Our AI will analyze your body dimensions in
                  seconds.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Front Photo */}
                <motion.div
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                    selectedImages.front
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-cyan-300"
                  }`}
                  onClick={() => handleImageSelect("front")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedImages.front && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
                    <Image
                      src="/demo images/Fronts.jpeg"
                      alt="Front view"
                      fill
                      className="object-cover"
                    />
                    {!selectedImages.front && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Camera className="w-12 h-12 mx-auto mb-2" />
                          <p className="font-medium">Click to Select</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-center">
                    Front View
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-1">
                    Stand facing the camera
                  </p>
                </motion.div>

                {/* Side Photo */}
                <motion.div
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                    selectedImages.side
                      ? "border-pink-500 shadow-lg shadow-pink-500/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-pink-300"
                  }`}
                  onClick={() => handleImageSelect("side")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedImages.side && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
                    <Image
                      src="/demo images/Sides.jpeg"
                      alt="Side view"
                      fill
                      className="object-cover"
                    />
                    {!selectedImages.side && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Camera className="w-12 h-12 mx-auto mb-2" />
                          <p className="font-medium">Click to Select</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-center">
                    Side View
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-1">
                    Stand sideways to the camera
                  </p>
                </motion.div>
              </div>

              <motion.button
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  selectedImages.front && selectedImages.side
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
                onClick={startAnalysis}
                disabled={!selectedImages.front || !selectedImages.side}
                whileHover={
                  selectedImages.front && selectedImages.side
                    ? { scale: 1.02 }
                    : {}
                }
                whileTap={
                  selectedImages.front && selectedImages.side
                    ? { scale: 0.98 }
                    : {}
                }
              >
                <Upload className="w-5 h-5" />
                Analyze My Body
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {(!selectedImages.front || !selectedImages.side) && (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
                  Please select both photos to continue
                </p>
              )}
            </motion.div>
          )}

          {step === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto text-center py-12"
            >
              {/* AI Processing Animation */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Middle rotating ring */}
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-transparent border-b-cyan-400 border-l-pink-400"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner pulsing circle */}
                <motion.div
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <User className="w-16 h-16 text-cyan-500" />
                </motion.div>

                {/* Scanning lines */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-full"
                  initial={{ opacity: 0.5 }}
                >
                  <motion.div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  AI Analyzing
                </span>{" "}
                Your Body
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our advanced AI is measuring your body dimensions with 95%
                accuracy...
              </p>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Processing...
                  </span>
                  <span className="text-cyan-500 font-medium">
                    {analyzingProgress}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${analyzingProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Processing Steps */}
              <div className="mt-8 space-y-3 text-left max-w-sm mx-auto">
                {[
                  { text: "Detecting body outline", threshold: 20 },
                  { text: "Identifying key body points", threshold: 40 },
                  { text: "Calculating measurements", threshold: 60 },
                  { text: "Verifying accuracy", threshold: 80 },
                  { text: "Generating your profile", threshold: 95 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0.3 }}
                    animate={{
                      opacity: analyzingProgress >= item.threshold ? 1 : 0.3,
                    }}
                  >
                    {analyzingProgress >= item.threshold ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                    <span
                      className={
                        analyzingProgress >= item.threshold
                          ? "text-gray-700 dark:text-gray-200"
                          : "text-gray-400 dark:text-gray-500"
                      }
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Upload Photos
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-green-500" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    AI Analysis
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-cyan-500" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Results
                  </span>
                </div>
              </div>

              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 dark:text-white">
                  Analysis{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                    Complete!
                  </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here are your personalized body measurements
                </p>
              </div>

              {/* Measurements Grid */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Ruler className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold dark:text-white">
                      Your Body Measurements
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      95% accuracy based on AI analysis
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(mockMeasurements).map(
                    ([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-750 rounded-xl p-4 text-center"
                      >
                        <p className="text-gray-500 dark:text-gray-400 text-sm capitalize mb-1">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                          {value}
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>

              {/* CTA to Catalogue */}
              <motion.div
                className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:to-pink-500/20 rounded-2xl p-6 sm:p-8 text-center border border-cyan-200 dark:border-cyan-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
                  Ready to Find Your Perfect Fit?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Browse our demo catalogue and see how FitAI recommends the
                  perfect size for you!
                </p>
                <Link href="/demo/catalogue">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-xl font-bold text-lg inline-flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse Demo Catalogue
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
