export interface FooterLink {
  name: string;
  sectionId: string;
}

export const footerLinksData = {
  Services: [
    { name: 'Creator Content', sectionId: 'services' },
    { name: 'Reels & Shorts', sectionId: 'services' },
    { name: 'Podcast Editing', sectionId: 'services' },
    { name: 'Motion Graphics', sectionId: 'services' }
  ],
  Company: [
    { name: 'Portfolio', sectionId: 'portfolio' },
    { name: 'Pricing', sectionId: 'pricing' },
    { name: 'Testimonials', sectionId: 'testimonials' },
    { name: 'Contact', sectionId: 'contact' }
  ]
} as const;

export const socialLinksData = [
  { iconKey: 'instagram', href: 'http://instagram.com/unknownfanatic' },
  { iconKey: 'twitter', href: '#' },
  { iconKey: 'linkedin', href: '#' },
  { iconKey: 'youtube', href: '#' }
] as const;
