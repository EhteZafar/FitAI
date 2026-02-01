"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Filter,
  ShoppingBag,
  ArrowLeft,
  Star,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

// Mock product data
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "StyleCo",
    price: 29.99,
    rating: 4.5,
    reviews: 128,
    image: "/assets/product-images/white-tshirt.jpeg",
    category: "T-Shirts",
    colors: ["White", "Black", "Gray"],
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    brand: "DenimPro",
    price: 79.99,
    rating: 4.8,
    reviews: 256,
    image: "/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png",
    category: "Jeans",
    colors: ["Blue", "Black", "Dark Blue"],
  },
  {
    id: 3,
    name: "Casual Blazer",
    brand: "FormalWear",
    price: 149.99,
    rating: 4.6,
    reviews: 89,
    image: "/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png",
    category: "Blazers",
    colors: ["Navy", "Charcoal", "Burgundy"],
  },
  {
    id: 4,
    name: "Cotton Hoodie",
    brand: "ComfortZone",
    price: 59.99,
    rating: 4.7,
    reviews: 342,
    image: "/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png",
    category: "Hoodies",
    colors: ["Gray", "Black", "Navy"],
  },
  {
    id: 5,
    name: "Chino Pants",
    brand: "CasualStyle",
    price: 69.99,
    rating: 4.4,
    reviews: 167,
    image: "/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png",
    category: "Pants",
    colors: ["Khaki", "Navy", "Olive"],
  },
  {
    id: 6,
    name: "Polo Shirt",
    brand: "ClassicWear",
    price: 44.99,
    rating: 4.5,
    reviews: 203,
    image: "/assets/d9822f1023325578d86c6d2dea01a43b91bc3531.png",
    category: "Polos",
    colors: ["White", "Navy", "Red"],
  },
];

const categories = [
  "All",
  "T-Shirts",
  "Jeans",
  "Blazers",
  "Hoodies",
  "Pants",
  "Polos",
];

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold dark:text-white">
                FitAI <span className="text-cyan-500">Catalogue</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded-full text-xs font-medium text-green-700 dark:text-green-300 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Profile Active
            </div>
            <div className="relative hidden sm:block">
              <ShoppingBag className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Your Profile Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:to-pink-500/20 rounded-2xl p-4 sm:p-6 mb-8 border border-cyan-200 dark:border-cyan-800"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold dark:text-white">
                  Your FitAI Profile is Active
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Click "Try On" on any product to see your perfect size
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                Chest: 96cm
              </span>
              <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                Waist: 82cm
              </span>
              <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                Hips: 98cm
              </span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/demo/product/${product.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 group">
                  {/* Product Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* FitAI Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-white text-xs font-medium flex items-center gap-1 z-10">
                      <Sparkles className="w-3 h-3" />
                      FitAI Ready
                    </div>
                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-pink-500" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-bold dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                        ${product.price}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {product.colors.length} colors
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 dark:text-gray-500 mb-2">
              No products found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
