"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, PenToolIcon as Tool, Clock, Shield } from "lucide-react"
import BookAppointmentModal from "./BookAppointmentModal"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()
  const { scrollY } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, -100])
  const rickshawY = useTransform(scrollY, [0, 500], [0, -50])
  const textY = useTransform(scrollY, [0, 500], [0, -30])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  }

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-green-500" />,
      title: "Expert EV Repairs",
      description: "Specialized in all e-rickshaw models",
    },
    {
      icon: <Tool className="h-5 w-5 text-green-500" />,
      title: "Genuine Parts",
      description: "Original components for lasting performance",
    },
    {
      icon: <Clock className="h-5 w-5 text-green-500" />,
      title: "Quick Service",
      description: "Same-day service for minor repairs",
    },
    {
      icon: <Shield className="h-5 w-5 text-green-500" />,
      title: "Warranty Support",
      description: "Extended warranty on all repairs",
    },
  ]

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      {/* Background Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0xOGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDM2YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTE4LTE4YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bS0xOC0xOGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0tMTggMzZjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zNmMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDE4YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTE4IDBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                Avtar EV Motors - Trusted Service Center
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Expert Service for Your <span className="text-green-600 dark:text-green-500">E-Rickshaw</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Professional maintenance, repairs, and upgrades for all electric rickshaw models. Get back on the road
              quickly with our specialized service.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <BookAppointmentModal>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Book Service Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </BookAppointmentModal>

              <Button size="lg" variant="outline">
                View Services
              </Button>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  animate={controls}
                  className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-1.5 bg-green-50 dark:bg-green-900/30 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y: rickshawY }}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src="/Images/HeroImg.png"
                  alt="E-Rickshaw Service"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-xl"
              />
            </div>

            {/* Stats Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute -bottom-10 -right-5 md:right-5 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl z-20"
            >
              <div className="flex items-center space-x-4">
                <div className="text-center px-3 border-r border-gray-200 dark:border-gray-700">
                  <p className="text-3xl font-bold text-green-600">5000+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Repairs</p>
                </div>
                <div className="text-center px-3">
                  <p className="text-3xl font-bold text-green-600">98%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white dark:fill-black"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  )
}
