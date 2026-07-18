import { motion } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { pricingPlansData } from '@/constants/pricing';

export function Pricing() {
  const { isDark } = useTheme();
  const [isMonthly, setIsMonthly] = useState(true);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p
            className="uppercase tracking-[0.22em] mb-4"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: '0.75rem',
              color: isDark ? 'rgba(233, 213, 255, 0.45)' : 'rgba(59, 47, 99, 0.62)'
            }}
          >
            Pricing
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            Flexible Pricing Plans
          </h2>

          <div
            className="inline-flex items-center gap-3 p-1.5 rounded-xl"
            style={{
              background: isDark
                ? 'rgba(255, 255, 255, 0.04)'
                : 'rgba(255, 255, 255, 0.72)',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.08)'
                : '1px solid rgba(91, 33, 182, 0.08)',
              backdropFilter: 'blur(16px)'
            }}
          >
            <button
              onClick={() => setIsMonthly(true)}
              className="px-6 py-2 rounded-lg transition-all duration-250"
              style={{
                background: isMonthly
                  ? 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)'
                  : 'transparent',
                color: isMonthly ? '#ffffff' : isDark ? '#F8F5FF' : '#241B42',
                fontWeight: isMonthly ? 600 : 450
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className="px-6 py-2 rounded-lg transition-all duration-250"
              style={{
                background: !isMonthly
                  ? 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)'
                  : 'transparent',
                color: !isMonthly ? '#ffffff' : isDark ? '#F8F5FF' : '#241B42',
                fontWeight: !isMonthly ? 600 : 450
              }}
            >
              Yearly
              <span className="ml-2 text-xs opacity-80">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlansData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative p-8 rounded-2xl transition-all duration-250 hover:-translate-y-1"
              style={{
                background: plan.popular
                  ? isDark
                    ? 'rgba(124, 58, 237, 0.08)'
                    : 'rgba(124, 58, 237, 0.04)'
                  : isDark
                  ? 'rgba(255, 255, 255, 0.04)'
                  : 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(16px)',
                border: plan.popular
                  ? '1px solid rgba(124, 58, 237, 0.3)'
                  : isDark
                  ? '1px solid rgba(255, 255, 255, 0.08)'
                  : '1px solid rgba(91, 33, 182, 0.08)',
                boxShadow: plan.popular
                  ? '0 20px 40px rgba(124, 58, 237, 0.2)'
                  : isDark
                  ? '0 10px 30px rgba(0, 0, 0, 0.18)'
                  : '0 10px 30px rgba(91, 33, 182, 0.06)'
              }}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                    color: '#ffffff'
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 650,
                  color: isDark ? '#F8F5FF' : '#241B42'
                }}
              >
                {plan.name}
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: '0.9rem',
                  color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                }}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <>
                    <div
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: isDark ? '#F8F5FF' : '#241B42'
                      }}
                    >
                      ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                    </div>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                      }}
                    >
                      per month
                    </p>
                  </>
                ) : (
                  <div
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    Custom
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                    />
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-lg font-medium transition-all duration-250 hover:scale-[1.02]"
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)'
                    : isDark
                    ? 'rgba(255, 255, 255, 0.045)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: plan.popular
                    ? 'none'
                    : isDark
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(91, 33, 182, 0.08)',
                  color: plan.popular ? '#ffffff' : isDark ? '#F8F5FF' : '#241B42'
                }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
