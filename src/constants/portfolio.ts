import { Project, FilterOption } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Tech Startup Launch',
    client: 'Innovate Labs',
    category: 'brand',
    color: 'from-blue-500 to-purple-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Creator Series',
    client: 'Sarah Johnson',
    category: 'youtube',
    color: 'from-pink-500 to-rose-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Product Showcase',
    client: 'Modern Goods',
    category: 'ad',
    color: 'from-emerald-500 to-teal-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Business Podcast',
    client: 'The Growth Show',
    category: 'podcast',
    color: 'from-orange-500 to-amber-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'Viral Reels Campaign',
    client: 'Fashion Forward',
    category: 'reels',
    color: 'from-violet-500 to-purple-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'Brand Documentary',
    client: 'Heritage Co.',
    category: 'brand',
    color: 'from-indigo-500 to-blue-600',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

export const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All Work' },
  { id: 'brand', label: 'Brand Films' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'reels', label: 'Reels' },
  { id: 'podcast', label: 'Podcasts' },
  { id: 'ad', label: 'Ads' }
];