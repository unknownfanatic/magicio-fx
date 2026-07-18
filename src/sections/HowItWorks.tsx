import { motion } from 'motion/react';
import { useTheme } from '@/hooks/useTheme';
import { processStepsData } from '@/constants/steps';
import { Upload, Wand2, Video, Rocket } from 'lucide-react';

const iconMap = {
  upload: Upload,
  wand: Wand2,
  video: Video,
  rocket: Rocket
};

export function HowItWorks() {
  const { isDark } = useTheme();

  return (
    <section className="py-32 px-6">
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
            Process
          </p>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processStepsData.map((step, index) => {
            const IconComponent = iconMap[step.iconKey];

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
                className="relative"
              >
                {index < processStepsData.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px]"
                    style={{
                      background: isDark
                        ? 'linear-gradient(to right, rgba(124, 58, 237, 0.3), transparent)'
                        : 'linear-gradient(to right, rgba(91, 33, 182, 0.2), transparent)'
                    }}
                  />
                )}

                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
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
                        className="w-9 h-9"
                        style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                      />
                    )}
                  </div>

                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                      color: '#ffffff',
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="mb-3 text-center"
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 650,
                      color: isDark ? '#F8F5FF' : '#241B42'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-center"
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
