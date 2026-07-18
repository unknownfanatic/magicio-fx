import { motion } from 'motion/react';
import { useTheme } from '@/hooks/useTheme';
import { statsData } from '@/constants/stats';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function Stats() {
  const { isDark } = useTheme();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl p-12"
          style={{
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.04)'
              : 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(16px)',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(91, 33, 182, 0.08)',
            boxShadow: isDark
              ? '0 10px 30px rgba(0, 0, 0, 0.18)'
              : '0 10px 30px rgba(91, 33, 182, 0.06)'
          }}
        >
          {statsData.map((stat, index) => (
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
              className="text-center"
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  backgroundImage: isDark
                    ? 'linear-gradient(135deg, #7C3AED, #A855F7)'
                    : 'linear-gradient(135deg, #5B21B6, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: isDark
                    ? 'rgba(245, 240, 255, 0.72)'
                    : '#4B426A'
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
