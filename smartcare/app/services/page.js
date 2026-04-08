import ServicesFull from "@/components/sections/services-full";
import Footer from "@/components/site/footer";

export const metadata = {
  title: "All Services & Pricing | SmartCare AC & Refrigerator Repair",
  description:
    "Transparent pricing for AC repair, AC servicing, AC installation, gas refill, compressor repair, refrigerator repair & more in Jhumri Telaiya.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesFull />
      <Footer />
    </>
  );
}
