import HeroSection from "@/components/sections/herosection";
import WhatWeDo from "@/components/sections/whatwedo";
import ServicesPreview from "@/components/sections/services-preview";
import CTASection from "@/components/sections/cta-section";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/site/footer"
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <ServicesPreview />
      <CTASection />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
