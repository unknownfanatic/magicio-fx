export interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  description: string;
  features: string[];
  popular?: boolean;
}
