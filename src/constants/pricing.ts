import { PricingPlan } from '../types/pricing';

export const pricingPlansData: PricingPlan[] = [
  {
    name: 'Starter',
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: 'Perfect for individual creators',
    features: [
      '2 videos per month',
      'Basic color grading',
      'Sound design',
      '48-hour delivery',
      'Email support'
    ]
  },
  {
    name: 'Creator',
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    description: 'Ideal for growing channels',
    features: [
      '5 videos per month',
      'Advanced editing',
      'Motion graphics',
      'Custom thumbnails',
      '24-hour delivery',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Professional',
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    description: 'For serious content creators',
    features: [
      '10 videos per month',
      'Cinematic grading',
      'VFX & animations',
      'Brand kit design',
      '12-hour delivery',
      'Dedicated editor',
      'Unlimited revisions'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Custom solutions for brands',
    features: [
      'Unlimited videos',
      'Full production team',
      'Strategy consulting',
      'Same-day delivery',
      '24/7 support',
      'Custom workflows',
      'White-label service'
    ]
  }
];
