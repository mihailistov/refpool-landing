'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Why is this better than Meta or Google ads?',
    a: "• Creators personally vouch for your product to engaged audiences\n• Word-of-mouth marketing converts better than cold ads\n• You only pay for actual results, not impressions or clicks\n• Lower cost per acquisition than traditional advertising\n• No ad auction competition driving up prices",
    icon: '🚀',
    color: 'primary',
  },
  {
    q: 'How are smart incentive deals different?',
    a: "Instead of flat commission rates, set layered rewards: '$5 per sale + $100 bonus for 20 referrals.' This motivates creators to actually push your links because they see bigger rewards for better performance.",
    icon: '🎯',
    color: 'primary',
  },
  {
    q: 'Do I need crypto knowledge to use this?',
    a: "No. Brands fund campaigns with credit cards. Creators get paid in USDC but don't need crypto knowledge. We handle all the technical complexity — you focus on results.",
    icon: '💳',
    color: 'primary',
  },
  {
    q: 'How fast do creators actually get paid?',
    a: 'Instantly. The moment a conversion is verified, creators receive USDC in their wallet. No 30-day delays, no payment disputes, no excuses.',
    icon: '⚡',
    color: 'secondary',
  },
  {
    q: 'What prevents creators from gaming the system?',
    a: 'Advanced fraud detection tracks real user behavior and conversion quality. Suspicious activity gets flagged before you pay for it. Only genuine conversions count.',
    icon: '🛡️',
    color: 'accent',
  },
  {
    q: 'How do creators cash out their earnings?',
    a: 'Convert USDC to cash using exchanges like Coinbase, Kraken, or Binance. Most creators prefer keeping earnings in USDC for stability and instant access.',
    icon: '💰',
    color: 'warning',
  },
  {
    q: 'Can I set spending limits and deadlines?',
    a: "Yes. Set daily/monthly spending caps, campaign end dates, and performance targets. You stay in complete control of your budget while creators compete for your rewards.",
    icon: '⏰',
    color: 'accent',
  },
  {
    q: "What's the minimum to get started?",
    a: "No minimum campaign budget. Start with $100 to test, scale to $10,000+ when you see results. Creators can earn from their first sale — no minimum payout thresholds.",
    icon: "💸",
    color: "secondary"
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className='section bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl'
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-green-200 to-yellow-200 rounded-full opacity-15 blur-xl'
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='mx-auto container-tight px-4 relative z-10' ref={ref}>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='h2 mb-4'>❓ Frequently Asked Questions</h2>
          <p className='p text-lg max-w-2xl mx-auto'>
            Got questions? We've got answers.
            <span className='font-semibold text-primary-600'>
              {' '}
              Everything you need to know
            </span>{' '}
            about getting started.
          </p>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 gap-6'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className='group relative'
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
            >
              <div
                className={`card-colorful relative overflow-hidden bg-gradient-to-br from-white to-${faq.color}-50 border-0 cursor-pointer`}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${faq.color}-400 to-${faq.color}-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  }}
                />

                {/* Content */}
                <div className='relative z-10'>
                  <div className='flex items-start gap-4 mb-3'>
                    <motion.div
                      className='text-2xl flex-shrink-0 mt-1'
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {faq.icon}
                    </motion.div>
                    <div className='flex-1'>
                      <motion.h3
                        className='text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300'
                        whileHover={{
                          scale: 1.02,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                      >
                        {faq.q}
                      </motion.h3>
                    </div>
                    <motion.div
                      className={`text-${faq.color}-500 text-xl transition-transform duration-300`}
                      animate={{
                        rotate: expandedIndex === i ? 180 : 0,
                      }}
                    >
                      ▼
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === i ? 'auto' : 0,
                      opacity: expandedIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <p className="text-gray-600 leading-relaxed pl-12 pb-2 whitespace-pre-line">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className='absolute inset-0 border-2 border-transparent rounded-2xl'
                  whileHover={{
                    borderColor: `rgb(${
                      faq.color === 'primary'
                        ? '14 165 233'
                        : faq.color === 'secondary'
                        ? '34 197 94'
                        : faq.color === 'accent'
                        ? '217 70 239'
                        : faq.color === 'warning'
                        ? '245 158 11'
                        : '14 165 233'
                    })`,
                    transition: { duration: 0.3 },
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className='text-gray-600 mb-6'>
            Still have questions? We'd love to help! 💬
          </p>
          <motion.a
            href='mailto:hello@refpool.xyz'
            className='btn btn-secondary text-lg px-8 py-4'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            📧 Contact us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
