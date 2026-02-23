import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import ProductShowcase from "../components/ProductShowcase";
import SupplyChain from "../components/SupplyChain";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalPresence from "../components/GlobalPresence";
import Testimonials from "../components/Testimonials";
import InquiryForm from "../components/InquiryForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <ProductShowcase />
      <SupplyChain />
      <WhyChooseUs />
      <GlobalPresence />
      <Testimonials />
      <InquiryForm />
    </div>
  );
}
