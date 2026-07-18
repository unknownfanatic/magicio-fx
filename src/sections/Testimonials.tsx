import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { testimonialsData } from '@/constants/testimonials';

export function Testimonials() {
  const { isDark } = useTheme();

  return (
    <section id="testimonials" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p
            className="uppercase tracking-[0.22em] mb-4"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: '0.75rem',
              color: isDark ? 'rgba(233, 213, 255, 0.45)' : 'rgba(59, 47, 99, 0.62)'
            }}
          >
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            Trusted by Creators
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] p-8 rounded-2xl"
              style={{
                background: isDark
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
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                  />
                ))}
              </div>

              <p
                className="mb-6"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                }}
              >
                "{testimonial.content}"
              </p>

              <div>
                <div
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 650,
                    color: isDark ? '#F8F5FF' : '#241B42',
                    marginBottom: '0.25rem'
                  }}
                >
                  {testimonial.name}
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
