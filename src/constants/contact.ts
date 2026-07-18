import { ContactInfoItem } from '../types/contact';

export const contactInfoData: ContactInfoItem[] = [
  {
    iconKey: 'mail',
    label: 'Email',
    value: 'hello@magicio.fx'
  },
  {
    iconKey: 'phone',
    label: 'Phone',
    value: '+91 9580612882'
  },
  {
    iconKey: 'mapPin',
    label: 'Location',
    value: 'Jhansi, Uttar Pradesh'
  }
];

export const projectTypes = [
  { value: 'youtube', label: 'YouTube Editing' },
  { value: 'reels', label: 'Reels & Shorts' },
  { value: 'podcast', label: 'Podcast Editing' },
  { value: 'motion', label: 'Motion Graphics' },
  { value: 'ads', label: 'Ad Creatives' },
  { value: 'brand', label: 'Brand Storytelling' }
] as const;
