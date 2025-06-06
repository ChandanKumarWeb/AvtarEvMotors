"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, MapPin, Wrench, Heart, Target, Eye, CheckCircle, Calendar, Trophy } from "lucide-react"

export default function AboutSection() {
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

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "5000+",
      label: "Happy Customers",
      description: "Satisfied e-rickshaw owners",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      number: "15000+",
      label: "Repairs Completed",
      description: "Successful service jobs",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      number: "8+",
      label: "Years Experience",
      description: "In e-rickshaw service",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "98%",
      label: "Success Rate",
      description: "First-time fix rate",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything else, ensuring quality service every time.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Only genuine parts and proven repair methods to ensure long-lasting solutions.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Service",
      description: "We respect your time and ensure quick turnaround without compromising quality.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Excellence",
      description: "Continuous improvement and staying updated with latest e-rickshaw technologies.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Technician",
      experience: "12+ years",
      specialization: "Battery & Motor Systems",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Amit Singh",
      role: "Senior Mechanic",
      experience: "8+ years",
      specialization: "Electrical & Electronics",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Sharma",
      role: "Service Advisor",
      experience: "5+ years",
      specialization: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "2016",
      title: "Founded Avtar EV Motors",
      description: "Started with a small workshop and big dreams",
    },
    {
      year: "2018",
      title: "Expanded Services",
      description: "Added battery replacement and motor repair services",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online booking and customer portal",
    },
    {
      year: "2022",
      title: "Certified Service Center",
      description: "Became authorized service center for major brands",
    },
    {
      year: "2024",
      title: "5000+ Customers",
      description: "Reached milestone of serving 5000+ satisfied customers",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              About Us
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Your Trusted <span className="text-green-600 dark:text-green-500">E-Rickshaw</span> Service Partner
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Since 2016, Avtar EV Motors has been the leading e-rickshaw service center, providing expert maintenance,
            repairs, and upgrades. We're committed to keeping your electric vehicles running efficiently and safely.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
            >
              <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Avtar EV Motors was founded in 2016 with a simple mission: to provide reliable, professional service for
                the growing e-rickshaw community. What started as a small workshop has grown into the region's most
                trusted e-rickshaw service center.
              </p>
              <p>
                Our founder, Rajesh Kumar, recognized the need for specialized e-rickshaw service when electric vehicles
                were just beginning to transform urban transportation. With over 12 years of experience in automotive
                repair, he assembled a team of skilled technicians dedicated to mastering e-rickshaw technology.
              </p>
              <p>
                Today, we're proud to serve over 5000 customers and have completed more than 15,000 successful repairs.
                Our commitment to quality, genuine parts, and customer satisfaction has made us the preferred choice for
                e-rickshaw owners across the region.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Avtar EV Motors Workshop"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Established</p>
              <p className="text-2xl font-bold">2016</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To provide exceptional e-rickshaw service and maintenance solutions that keep our customers' vehicles
              running efficiently, safely, and profitably. We strive to be the most trusted partner in the e-rickshaw
              ecosystem.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading e-rickshaw service network, setting industry standards for quality, innovation, and
              customer satisfaction while contributing to sustainable urban transportation solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="text-center bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
              >
                <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Meet Our Expert Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="text-center bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{member.experience}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.specialization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        {/* <motion.div variants={containerVariants} initial="hidden" animate={controls} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 dark:bg-green-800"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-left" : "md:pl-8 text-right"}`}>
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-black"></div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Location & Contact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <MapPin className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Service Center
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Located in the heart of the city with easy access and ample parking. Our modern facility is equipped with
              the latest tools and technology for comprehensive e-rickshaw service.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
              <p className="text-gray-600 dark:text-gray-300">123 Service Road, Industrial Area, New Delhi - 110001</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Mon-Sat: 9:00 AM - 7:00 PM
                <br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: +91 98765 43210
                <br />
                Email: info@avtarevmotors.com
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Get Directions
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
