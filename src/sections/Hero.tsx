import { motion } from 'motion/react';
import { useTheme } from '@/hooks/useTheme';
import { heroCopy } from '@/constants/copy';

export function Hero() {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient Background Glow */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(124, 58, 237, 0.22), transparent)'
          }}
        />
      )}

      {/* Subtle Animated Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.4), transparent)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)'
            : 'radial-gradient(circle, rgba(91, 33, 182, 0.15), transparent)',
          right: '10%',
          bottom: '20%'
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="uppercase tracking-[0.22em] mb-6"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: '0.75rem',
              color: isDark ? 'rgba(233, 213, 255, 0.45)' : 'rgba(59, 47, 99, 0.62)'
            }}
          >
            {heroCopy.label}
          </p>

          <h1
            className="mb-6 leading-[1.1]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: isDark ? 'clamp(64px, 8vw, 96px)' : 'clamp(56px, 7vw, 84px)',
              backgroundImage: isDark
                ? 'linear-gradient(180deg, #F8F5FF 0%, rgba(245, 240, 255, 0.8) 100%)'
                : 'linear-gradient(180deg, #241B42 0%, #4B426A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {heroCopy.titleLine1}
            <br />
            {heroCopy.titleLine2}
          </h1>

          <p
            className="max-w-2xl mx-auto mb-12"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
            }}
          >
            {heroCopy.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-xl font-medium transition-all duration-250 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)'
              }}
            >
              Book a Project
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 rounded-xl font-medium transition-all duration-250 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: isDark
                  ? 'rgba(255, 255, 255, 0.04)'
                  : 'rgba(255, 255, 255, 0.9)',
                border: isDark
                  ? '1px solid rgba(255, 255, 255, 0.08)'
                  : '1px solid rgba(91, 33, 182, 0.08)',
                color: isDark ? '#F8F5FF' : '#241B42',
                backdropFilter: 'blur(16px)'
              }}
            >
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
