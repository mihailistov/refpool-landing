'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Splits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const features = [
    {
      type: "brands",
      id: "merchants",
      badge: "For Brands",
      title: "Launch campaigns that actually work",
      description: "Set your budget, choose your rewards, and watch top creators drive real sales. Pay only for results that matter to your business.",
      features: [
        { text: "Pay with your credit card", icon: "💳" },
        { text: "Reward every sale or signup", icon: "🎯" },
        { text: "Set spending limits & deadlines", icon: "⏰" },
        { text: "Download performance reports", icon: "📊" }
      ],
      gradient: "from-primary-400 to-primary-600",
      bgGradient: "from-primary-50 to-blue-100",
      mainIcon: "🏢"
    },
    {
      type: "creators",
      id: "affiliates",
      badge: "For Creators",
      title: "Get paid instantly for every sale",
      description: "Find campaigns you love, share your link, and earn money the moment someone buys. No waiting, no paperwork, no hassle.",
      features: [
        { text: "Sign up with email or wallet", icon: "📧" },
        { text: "See your earnings grow live", icon: "📈" },
        { text: "Complete payment history", icon: "📋" },
        { text: "Available worldwide", icon: "🌍" }
      ],
      gradient: "from-secondary-400 to-secondary-600",
      bgGradient: "from-secondary-50 to-green-100",
      mainIcon: "🎨"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-accent-200 to-warning-200 rounded-full opacity-15 blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="mx-auto container-tight px-4 relative z-10" ref={ref}>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.type}
              id={feature.id}
              className="group relative"
              variants={{
                ...cardVariants,
                hidden: {
                  ...cardVariants.hidden,
                  x: index === 0 ? -50 : 50
                }
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <div className={`card-colorful relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} border-0`}>
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{
                    scale: 1.5,
                    rotate: 180,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="text-4xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {feature.mainIcon}
                    </motion.div>
                    <div className={`badge ${feature.type === 'brands' ? 'badge-primary' : 'badge-secondary'}`}>
                      {feature.badge}
                    </div>
                  </div>

                  <motion.h3
                    className="text-2xl font-bold mb-4 text-gray-900"
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.3 + idx * 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <motion.a
                      href="#waitlist"
                      className={`btn ${feature.type === 'brands' ? 'btn-primary' : 'btn-accent'} w-full text-center`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.type === 'brands' ? '🚀 Start Campaign' : '💰 Start Earning'}
                    </motion.a>
                  </div>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: `rgb(${feature.type === 'brands' ? '14 165 233' : '34 197 94'})`,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
