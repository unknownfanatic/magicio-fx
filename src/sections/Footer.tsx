import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { footerLinksData, socialLinksData } from '@/constants/footer';

const iconMap = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube
};

export function Footer() {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-16 px-6 border-t"
      style={{
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(91, 33, 182, 0.08)',
        background: isDark ? '#0D0A1A' : '#F7F4FC'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span
                className="font-bold tracking-tight text-xl"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  color: isDark ? '#F8F5FF' : '#241B42'
                }}
              >
                MAGICIO.FX
              </span>
            </div>
            <p
              className="mb-6"
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
              }}
            >
              Transforming raw footage into cinematic content that captures attention and drives results.
            </p>
            <div className="flex gap-3">
              {socialLinksData.map((social, index) => {
                const IconComponent = iconMap[social.iconKey];

                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-250 hover:-translate-y-1"
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.72)',
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid rgba(91, 33, 182, 0.08)'
                    }}
                  >
                    {IconComponent && (
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: isDark ? '#A855F7' : '#7C3AED' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinksData).map(([category, links]) => (
            <div key={category}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 650,
                  color: isDark ? '#F8F5FF' : '#241B42'
                }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.sectionId)}
                      className="transition-colors duration-200 hover:opacity-80 text-left"
                      style={{
                        fontSize: '0.95rem',
                        color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: '1.125rem',
                fontWeight: 650,
                color: isDark ? '#F8F5FF' : '#241B42'
              }}
            >
              Newsletter
            </h3>
            <p
              className="mb-4"
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
              }}
            >
              Get the latest tips and insights on content creation.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg outline-none text-sm"
                style={{
                  background: isDark
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: isDark
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(91, 33, 182, 0.08)',
                  color: isDark ? '#F8F5FF' : '#241B42'
                }}
              />
              <button
                className="px-4 py-2.5 rounded-lg font-medium transition-all duration-250 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                  color: '#ffffff'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(91, 33, 182, 0.08)'
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
            }}
          >
            © 2026 MAGICIO.FX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              className="transition-colors duration-200 hover:opacity-80"
              style={{
                fontSize: '0.875rem',
                color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
              }}
            >
              Privacy Policy
            </button>
            <button
              className="transition-colors duration-200 hover:opacity-80"
              style={{
                fontSize: '0.875rem',
                color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A'
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
