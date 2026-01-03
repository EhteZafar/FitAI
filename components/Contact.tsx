"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 dark:text-white">
            Get in <span className="text-cyan-500">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-pink-900/20 dark:to-yellow-900/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1">
                      Email
                    </div>
                    <div className="text-base sm:text-lg dark:text-gray-200">
                      contact@fitai.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1">
                      Phone
                    </div>
                    <div className="text-base sm:text-lg dark:text-gray-200">
                      +491234567891
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1">
                      Office
                    </div>
                    <div className="text-base sm:text-lg dark:text-gray-200">
                      Saxony, Dresden
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl sm:rounded-2xl">
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">
                Business Hours
              </h3>
              <p className="text-sm sm:text-base text-cyan-100 mb-3 sm:mb-4">
                We&apos;re here to help you!
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-cyan-100">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="+49-0000000000"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message <span className="text-pink-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-cyan-500 focus:outline-none transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
