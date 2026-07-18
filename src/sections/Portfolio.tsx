import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { projectsData, filterOptions } from '@/constants/portfolio';

function getYouTubeId(url: string | undefined | null): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function Portfolio() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 px-6">
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
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: isDark ? '#F8F5FF' : '#241B42'
            }}
          >
            Our Latest Work
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-6 py-2.5 rounded-lg transition-all duration-250"
              style={{
                background:
                  activeFilter === filter.id
                    ? 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)'
                    : isDark
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'rgba(255, 255, 255, 0.72)',
                border:
                  activeFilter === filter.id
                    ? '1px solid transparent'
                    : isDark
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(91, 33, 182, 0.08)',
                color: activeFilter === filter.id ? '#ffffff' : isDark ? '#F8F5FF' : '#241B42',
                fontWeight: activeFilter === filter.id ? 600 : 450,
                backdropFilter: 'blur(16px)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const videoId = getYouTubeId(project.link);
              const isPlaying = playingId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                  style={{
                    border: isDark
                      ? '1px solid rgba(255, 255, 255, 0.08)'
                      : '1px solid rgba(91, 33, 182, 0.08)'
                  }}
                  onClick={() => {
                    if (!isPlaying && videoId) setPlayingId(project.id);
                  }}
                >
                  {isPlaying && videoId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {videoId ? (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${getYouTubeThumbnail(videoId)})` }}
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                        />
                      )}

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div
                          className="inline-block px-3 py-1 rounded-full mb-3 text-xs uppercase tracking-wider"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(8px)',
                            color: '#ffffff'
                          }}
                        >
                          {project.category}
                        </div>
                        <h3
                          className="mb-1"
                          style={{
                            fontFamily: "'Clash Display', sans-serif",
                            fontSize: '1.25rem',
                            fontWeight: 650,
                            color: '#ffffff'
                          }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm">{project.client}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}