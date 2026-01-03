"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fashion Enthusiast",
    image: "👩‍🦰",
    rating: 5,
    text: "Finally! No more ordering 3 sizes and returning 2. FitAI nailed my size on the first try.",
  },
  {
    name: "James K.",
    role: "Online Shopper",
    image: "👨‍💼",
    rating: 5,
    text: "I was skeptical at first, but the virtual try-on is incredibly accurate. Saved me hundreds in returns.",
  },
  {
    name: "Maria L.",
    role: "Busy Mom",
    image: "👩",
    rating: 5,
    text: "Shopping for clothes used to take hours. Now I know my size instantly across all my favorite brands!",
  },
];

export function ShopperTestimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 dark:text-white font-bold">
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              2 Million
            </span>{" "}
            Happy Shoppers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Real people, real results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-pink-400 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl text-white shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">2M+</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Happy Users
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">95%</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Accuracy Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-sm sm:text-base text-cyan-100">
              Average Rating
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
