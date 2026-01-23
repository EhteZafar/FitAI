"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Check,
  X,
  Ruler,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Info,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock product data
const productsData: Record<
  number,
  {
    id: number;
    name: string;
    brand: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
    category: string;
    image: string;
    colors: { name: string; hex: string }[];
    sizes: string[];
    sizeChart: Record<string, { chest: string; waist: string; length: string }>;
  }
> = {
  1: {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "StyleCo",
    price: 29.99,
    rating: 4.5,
    reviews: 128,
    description:
      "Premium cotton t-shirt with a classic fit. Perfect for everyday wear with breathable fabric and durable construction.",
    category: "T-Shirts",
    image: "/assets/product-images/white-tshirt.jpeg",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#6B7280" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeChart: {
      XS: { chest: "86-91", waist: "71-76", length: "66" },
      S: { chest: "91-96", waist: "76-81", length: "69" },
      M: { chest: "96-101", waist: "81-86", length: "72" },
      L: { chest: "101-106", waist: "86-91", length: "74" },
      XL: { chest: "106-111", waist: "91-96", length: "76" },
      XXL: { chest: "111-116", waist: "96-101", length: "78" },
    },
  },
  2: {
    id: 2,
    name: "Slim Fit Denim Jeans",
    brand: "DenimPro",
    price: 79.99,
    rating: 4.8,
    reviews: 256,
    description:
      "Modern slim-fit jeans crafted from premium stretch denim. Features a comfortable mid-rise waist and tapered leg.",
    category: "Jeans",
    colors: [
      { name: "Blue", hex: "#3B82F6" },
      { name: "Black", hex: "#000000" },
      { name: "Dark Blue", hex: "#1E3A8A" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    sizeChart: {
      "28": { chest: "-", waist: "71-74", length: "76" },
      "30": { chest: "-", waist: "76-79", length: "78" },
      "32": { chest: "-", waist: "81-84", length: "81" },
      "34": { chest: "-", waist: "86-89", length: "81" },
      "36": { chest: "-", waist: "91-94", length: "81" },
      "38": { chest: "-", waist: "96-99", length: "81" },
    },
  },
  3: {
    id: 3,
    name: "Casual Blazer",
    brand: "FormalWear",
    price: 149.99,
    rating: 4.6,
    reviews: 89,
    description:
      "Versatile casual blazer perfect for both office and weekend wear. Features a slim fit with stretch comfort.",
    category: "Blazers",
    colors: [
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Charcoal", hex: "#374151" },
      { name: "Burgundy", hex: "#7C2D12" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      S: { chest: "91-96", waist: "76-81", length: "69" },
      M: { chest: "96-101", waist: "81-86", length: "72" },
      L: { chest: "101-106", waist: "86-91", length: "74" },
      XL: { chest: "106-111", waist: "91-96", length: "76" },
      XXL: { chest: "111-116", waist: "96-101", length: "78" },
    },
  },
  4: {
    id: 4,
    name: "Cotton Hoodie",
    brand: "ComfortZone",
    price: 59.99,
    rating: 4.7,
    reviews: 342,
    description:
      "Ultra-soft cotton-blend hoodie with a relaxed fit. Features a kangaroo pocket and adjustable drawstring hood.",
    category: "Hoodies",
    colors: [
      { name: "Gray", hex: "#6B7280" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1E3A5F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeChart: {
      XS: { chest: "86-91", waist: "71-76", length: "64" },
      S: { chest: "91-96", waist: "76-81", length: "67" },
      M: { chest: "96-101", waist: "81-86", length: "70" },
      L: { chest: "101-106", waist: "86-91", length: "72" },
      XL: { chest: "106-111", waist: "91-96", length: "74" },
      XXL: { chest: "111-116", waist: "96-101", length: "76" },
    },
  },
  5: {
    id: 5,
    name: "Chino Pants",
    brand: "CasualStyle",
    price: 69.99,
    rating: 4.4,
    reviews: 167,
    description:
      "Classic chino pants with a modern slim fit. Made from lightweight cotton twill for all-day comfort.",
    category: "Pants",
    colors: [
      { name: "Khaki", hex: "#C2A878" },
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Olive", hex: "#556B2F" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    sizeChart: {
      "28": { chest: "-", waist: "71-74", length: "76" },
      "30": { chest: "-", waist: "76-79", length: "78" },
      "32": { chest: "-", waist: "81-84", length: "81" },
      "34": { chest: "-", waist: "86-89", length: "81" },
      "36": { chest: "-", waist: "91-94", length: "81" },
      "38": { chest: "-", waist: "96-99", length: "81" },
    },
  },
  6: {
    id: 6,
    name: "Polo Shirt",
    brand: "ClassicWear",
    price: 44.99,
    rating: 4.5,
    reviews: 203,
    description:
      "Timeless polo shirt crafted from breathable cotton piqué. Features a classic collar and two-button placket.",
    category: "Polos",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Red", hex: "#DC2626" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeChart: {
      XS: { chest: "86-91", waist: "71-76", length: "66" },
      S: { chest: "91-96", waist: "76-81", length: "69" },
      M: { chest: "96-101", waist: "81-86", length: "72" },
      L: { chest: "101-106", waist: "86-91", length: "74" },
      XL: { chest: "106-111", waist: "91-96", length: "76" },
      XXL: { chest: "111-116", waist: "96-101", length: "78" },
    },
  },
};

// Mock user measurements (from demo analysis)
const userMeasurements = {
  chest: 96,
  waist: 82,
  hips: 98,
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const productId = parseInt(id);
  const product = productsData[productId] || productsData[1];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showTryOn, setShowTryOn] = useState(false);
  const [tryOnLoading, setTryOnLoading] = useState(false);
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);
  const [fitAnalysis, setFitAnalysis] = useState<{
    size: string;
    fit: "perfect" | "good" | "tight" | "loose";
    confidence: number;
    details: {
      area: string;
      fit: string;
      icon: "check" | "warning" | "alert";
    }[];
  } | null>(null);

  const handleTryOn = () => {
    setShowTryOn(true);
    setTryOnLoading(true);
    setFitAnalysis(null);

    // Simulate AI analysis
    setTimeout(() => {
      // Find recommended size based on user measurements
      let bestSize = product.sizes[0];
      let bestFit: "perfect" | "good" | "tight" | "loose" = "good";

      for (const size of product.sizes) {
        const sizeData = product.sizeChart[size];
        if (sizeData.chest !== "-") {
          const [minChest, maxChest] = sizeData.chest.split("-").map(Number);
          if (
            userMeasurements.chest >= minChest &&
            userMeasurements.chest <= maxChest
          ) {
            bestSize = size;
            bestFit = "perfect";
            break;
          } else if (
            userMeasurements.chest >= minChest - 3 &&
            userMeasurements.chest <= maxChest + 3
          ) {
            bestSize = size;
            bestFit = "good";
          }
        } else if (sizeData.waist !== "-") {
          const [minWaist, maxWaist] = sizeData.waist.split("-").map(Number);
          if (
            userMeasurements.waist >= minWaist &&
            userMeasurements.waist <= maxWaist
          ) {
            bestSize = size;
            bestFit = "perfect";
            break;
          } else if (
            userMeasurements.waist >= minWaist - 3 &&
            userMeasurements.waist <= maxWaist + 3
          ) {
            bestSize = size;
            bestFit = "good";
          }
        }
      }

      setRecommendedSize(bestSize);
      setSelectedSize(bestSize);
      setFitAnalysis({
        size: bestSize,
        fit: bestFit,
        confidence: bestFit === "perfect" ? 95 : 87,
        details: [
          {
            area: "Chest",
            fit: bestFit === "perfect" ? "Perfect fit" : "Slightly snug",
            icon: bestFit === "perfect" ? "check" : "warning",
          },
          {
            area: "Waist",
            fit: "Comfortable fit",
            icon: "check",
          },
          {
            area: "Length",
            fit: "Ideal length",
            icon: "check",
          },
        ],
      });
      setTryOnLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/demo/catalogue"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold dark:text-white">
                FitAI <span className="text-cyan-500">Demo</span>
              </span>
            </div>
          </div>
          <div className="px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded-full text-xs font-medium text-green-700 dark:text-green-300 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Profile Active
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* FitAI Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-white text-sm font-medium flex items-center gap-1.5 z-10">
                <Sparkles className="w-4 h-4" />
                FitAI Ready
              </div>
              {/* Favorite Button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10">
                <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
              </button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">
                {product.brand}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold dark:text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium dark:text-white">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              ${product.price}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium dark:text-white mb-3">
                Color:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  {selectedColor.name}
                </span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-cyan-500 scale-110"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium dark:text-white">
                  Size:{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    {selectedSize || "Select size"}
                  </span>
                </h3>
                {recommendedSize && (
                  <span className="text-sm text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    AI Recommended: {recommendedSize}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl font-medium transition-all relative ${
                      selectedSize === size
                        ? "bg-gradient-to-br from-cyan-500 to-pink-500 text-white"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400"
                    }`}
                  >
                    {size}
                    {recommendedSize === size && selectedSize !== size && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Try On Button */}
            <motion.button
              onClick={handleTryOn}
              className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Try On with FitAI
              <Ruler className="w-5 h-5" />
            </motion.button>

            {/* Add to Cart */}
            <button
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                selectedSize
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!selectedSize}
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </motion.div>
        </div>
      </main>

      {/* Try On Modal */}
      <AnimatePresence>
        {showTryOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => !tryOnLoading && setShowTryOn(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {tryOnLoading ? (
                /* Loading State */
                <div className="text-center py-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
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
                    {/* Inner icon */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                      <Ruler className="w-12 h-12 text-cyan-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    Analyzing Fit...
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Comparing your measurements with this product
                  </p>
                </div>
              ) : fitAnalysis ? (
                /* Results State */
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold dark:text-white">
                      FitAI Recommendation
                    </h3>
                    <button
                      onClick={() => setShowTryOn(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Recommended Size */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:to-pink-500/20 rounded-xl p-6 mb-6 border border-cyan-200 dark:border-cyan-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Recommended Size
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                            {fitAnalysis.size}
                          </span>
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              fitAnalysis.fit === "perfect"
                                ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                                : "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300"
                            }`}
                          >
                            {fitAnalysis.fit === "perfect"
                              ? "Perfect Fit"
                              : "Good Fit"}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Confidence
                        </p>
                        <p className="text-2xl font-bold text-cyan-500">
                          {fitAnalysis.confidence}%
                        </p>
                      </div>
                    </div>

                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${fitAnalysis.confidence}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Fit Details */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium dark:text-white flex items-center gap-2">
                      <Info className="w-4 h-4 text-cyan-500" />
                      Fit Analysis
                    </h4>
                    {fitAnalysis.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {detail.area}
                        </span>
                        <span
                          className={`flex items-center gap-2 text-sm font-medium ${
                            detail.icon === "check"
                              ? "text-green-600 dark:text-green-400"
                              : detail.icon === "warning"
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {detail.icon === "check" ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : detail.icon === "warning" ? (
                            <AlertCircle className="w-4 h-4" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                          {detail.fit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Your Measurements */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
                    <h4 className="font-medium dark:text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-cyan-500" />
                      Your Measurements vs Size {fitAnalysis.size}
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Your Chest
                        </p>
                        <p className="font-bold dark:text-white">
                          {userMeasurements.chest} cm
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Your Waist
                        </p>
                        <p className="font-bold dark:text-white">
                          {userMeasurements.waist} cm
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Your Hips
                        </p>
                        <p className="font-bold dark:text-white">
                          {userMeasurements.hips} cm
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedSize(fitAnalysis.size);
                        setShowTryOn(false);
                      }}
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                    >
                      <Check className="w-5 h-5" />
                      Select Size {fitAnalysis.size}
                    </button>
                    <button
                      onClick={() => setShowTryOn(false)}
                      className="py-3 px-6 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
