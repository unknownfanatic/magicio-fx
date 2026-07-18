import { motion } from 'motion/react';
import { useTheme } from '@/hooks/useTheme';
import { servicesData } from '@/constants/services';
import { Video, Film, Podcast, Sparkles, Megaphone, Clapperboard } from 'lucide-react';

const iconMap = {
  video: Video,
  film: Film,
  podcast: Podcast,
  sparkles: Sparkles,
  megaphone: Megaphone,
  clapperboard: Clapperboard
};

export function Services() {
  const { isDark } = useTheme();

  return (
    <section id="services" className="py-32 px-6">
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
            Our Services
          </p>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42',
              marginBottom: '1rem'
            }}
          >
            Post-Production Excellence
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
            }}
          >
            From raw footage to polished masterpiece, we handle every aspect of your content creation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconKey];

            return (
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
                className="group p-8 rounded-2xl transition-all duration-250 hover:-translate-y-1"
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
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(168, 85, 247, 0.2))'
                      : 'linear-gradient(135deg, rgba(91, 33, 182, 0.1), rgba(124, 58, 237, 0.1))',
                    border: isDark
                      ? '1px solid rgba(124, 58, 237, 0.3)'
                      : '1px solid rgba(91, 33, 182, 0.2)'
                  }}
                >
                  {IconComponent && (
                    <IconComponent
                      className="w-6 h-6"
                      style={{
                        color: isDark ? '#A855F7' : '#7C3AED'
                      }}
                    />
                  )}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 650,
                    color: isDark ? '#F8F5FF' : '#241B42'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
