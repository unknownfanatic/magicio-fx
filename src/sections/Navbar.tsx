import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { navItems } from '@/constants/navigation';

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        className="h-[68px] px-6 rounded-2xl flex items-center justify-between"
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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            MAGICIO.FX
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group capitalize"
              style={{ color: isDark ? 'rgba(245, 240, 255, 0.72)' : '#4B426A' }}
            >
              {item}
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 group-hover:w-full transition-all duration-300"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-280"
            style={{
              background: isDark
                ? 'rgba(255, 255, 255, 0.045)'
                : 'rgba(255, 255, 255, 0.9)',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.08)'
                : '1px solid rgba(91, 33, 182, 0.08)'
            }}
          >
            {isDark ? (
              <Sun className="w-5 h-5" style={{ color: '#F8F5FF' }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: '#241B42' }} />
            )}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 h-10 rounded-lg font-medium transition-all duration-250 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)'
            }}
          >
            Book a Project
          </button>
        </div>
      </div>
    </nav>
  );
}
