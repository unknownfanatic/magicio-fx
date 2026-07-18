import { Toaster } from 'sonner';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { HowItWorks } from '@/sections/HowItWorks';
import { Pricing } from '@/sections/Pricing';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(124, 58, 237, 0.95)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)'
          }
        }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
