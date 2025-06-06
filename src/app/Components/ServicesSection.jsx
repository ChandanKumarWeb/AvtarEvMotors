"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Battery,
  Zap,
  Settings,
  Wrench,
  Shield,
  Clock,
  PenToolIcon as Tool,
  Gauge,
  CircuitBoard,
  Paintbrush,
  FileText,
} from "lucide-react"
import BookAppointmentModal from "./BookAppointmentModal"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const services = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Service & Replacement",
      description: "Complete battery diagnostics, maintenance, and replacement with genuine lithium-ion batteries.",
      features: ["Battery health check", "Cell balancing", "Charging system repair", "Warranty support"],
      price: "Starting from ₹15,000",
      popular: true,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Motor Repair & Maintenance",
      description:
        "Expert motor servicing including winding repair, bearing replacement, and performance optimization.",
      features: ["Motor diagnostics", "Winding repair", "Bearing replacement", "Performance tuning"],
      price: "Starting from ₹8,000",
      popular: false,
    },
    {
      icon: <CircuitBoard className="h-8 w-8" />,
      title: "Controller & Electronics",
      description: "Advanced controller repair, programming, and electronic system troubleshooting.",
      features: ["Controller programming", "Circuit repair", "Display replacement", "Wiring harness"],
      price: "Starting from ₹5,000",
      popular: false,
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "General Maintenance",
      description: "Comprehensive service including brake adjustment, tire check, and overall vehicle inspection.",
      features: ["Brake service", "Tire inspection", "Suspension check", "Safety inspection"],
      price: "Starting from ₹2,500",
      popular: false,
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Mechanical Repairs",
      description: "Complete mechanical repair services for chassis, suspension, and steering components.",
      features: ["Chassis repair", "Suspension service", "Steering alignment", "Wheel balancing"],
      price: "Starting from ₹3,500",
      popular: false,
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Body Work & Paint",
      description: "Professional body repair, denting, painting, and aesthetic enhancement services.",
      features: ["Dent removal", "Paint job", "Body panel repair", "Aesthetic upgrades"],
      price: "Starting from ₹6,000",
      popular: false,
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Performance Upgrades",
      description: "Enhance your e-rickshaw's performance with speed controllers and efficiency improvements.",
      features: ["Speed optimization", "Range enhancement", "Power upgrades", "Efficiency tuning"],
      price: "Starting from ₹10,000",
      popular: false,
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Insurance & Documentation",
      description: "Complete assistance with insurance claims, registration, and legal documentation.",
      features: ["Insurance claims", "Registration help", "Permit assistance", "Legal documentation"],
      price: "Starting from ₹1,500",
      popular: false,
    },
  ]

  const quickServices = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Express Service",
      description: "Quick 30-minute basic checkup",
      time: "30 mins",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Emergency Repair",
      description: "24/7 roadside assistance",
      time: "On-call",
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Pickup & Drop",
      description: "Free pickup and delivery service",
      time: "Same day",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Complete E-Rickshaw <span className="text-green-600 dark:text-green-500">Service Solutions</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From routine maintenance to major repairs, we provide comprehensive service solutions for all e-rickshaw
            models. Our expert technicians ensure your vehicle runs efficiently and safely.
          </motion.p>
        </motion.div>

        {/* Quick Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {quickServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">{service.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                className={`h-full transition-all duration-300 hover:shadow-xl ${
                  service.popular
                    ? "border-green-500 dark:border-green-400 shadow-lg"
                    : "border-gray-200 dark:border-gray-800"
                } bg-white dark:bg-gray-900`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex p-4 rounded-full mb-4 mx-auto ${
                      service.popular
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-lg font-bold text-green-600 dark:text-green-400 mb-4">{service.price}</p>
                    <BookAppointmentModal>
                      <Button
                        className={`w-full ${
                          service.popular
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                        }`}
                      >
                        Book Service
                      </Button>
                    </BookAppointmentModal>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Service Package?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our experts for personalized service packages tailored to your e-rickshaw's specific needs. We offer
            flexible maintenance contracts and bulk service discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Call: +91 98765 43210
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
