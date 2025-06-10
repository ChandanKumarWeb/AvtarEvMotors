"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white text-black dark:bg-gray-900 dark:text-white py-6 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo/Title */}
        <div className="text-lg font-bold text-amber-600 dark:text-amber-400 text-center md:text-left">
          Avtar EV Motors
        </div>

        {/* Quick Links */}
        <div className="space-x-4 hidden md:flex text-sm">
          <a href="#" className="hover:underline text-gray-600 dark:text-gray-300">Home</a>
          <a href="#" className="hover:underline text-gray-600 dark:text-gray-300">Services</a>
          <a href="#" className="hover:underline text-gray-600 dark:text-gray-300">Contact</a>
        </div>

        {/* Credits with link */}
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
          Developed & Maintained by{" "}
          <a
            href="https://its-chandan-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black dark:text-white hover:underline"
          >
            Chandan Dev
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs">
        © {new Date().getFullYear()} E-Rickshaw Service Center. All rights reserved.
      </div>
    </motion.footer>
  );
}
