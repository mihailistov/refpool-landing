'use client';
import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) setDone(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="section bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-24 h-24 bg-gradient-to-r from-secondary-300 to-warning-300 rounded-full opacity-15 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="mx-auto container-tight px-4 relative z-10" ref={ref}>
        <motion.div
          className="card-colorful bg-gradient-to-br from-white to-primary-50 border-0 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          {/* Header */}
          <motion.div
            className="flex items-start justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="text-4xl"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                🚀
              </motion.div>
              <div>
                <div className="badge badge-primary mb-2">✨ Early Access</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the waitlist</h3>
                <p className="text-gray-600 text-lg">
                  Tell us who you are and how you plan to use refpool.
                  <span className="font-semibold text-primary-600"> Be among the first</span> to access the platform!
                </p>
              </div>
            </div>
          </motion.div>

          {done ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎉
              </motion.div>
              <h4 className="text-2xl font-bold text-green-700 mb-2">You're on the list!</h4>
              <p className="text-green-600 text-lg">
                Thanks for joining! We'll reach out shortly with your early access invitation.
              </p>
              <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Priority access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Early bird pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Exclusive updates</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={onSubmit}
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="md:col-span-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  🎭 I am a
                </label>
                <select
                  name="role"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white"
                  required
                >
                  <option value="affiliate">🎨 Affiliate / Creator</option>
                  <option value="merchant">🏢 Brand / Merchant</option>
                  <option value="other">🤔 Other</option>
                </select>
              </motion.div>

              <motion.div
                className="md:col-span-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  📧 Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                  placeholder="you@domain.com"
                  required
                />
              </motion.div>

              <motion.div
                className="md:col-span-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  💭 How will you use refpool? (optional)
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                  placeholder="Marketing for brand @xyz..."
                />
              </motion.div>

              <motion.div
                className="md:col-span-3 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  type="submit"
                  className="btn btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.05, y: loading ? 0 : -2 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </span>
                  ) : (
                    "🎯 Request early access"
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 mt-4">
                  💡 Join 500+ creators and 50+ brands already on the waitlist
                </p>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
