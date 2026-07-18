export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const statsData: StatItem[] = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: 'M+', label: 'Views Generated' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' }
];
