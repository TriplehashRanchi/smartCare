import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

