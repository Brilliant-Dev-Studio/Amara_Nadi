import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import ComingSoon from "./components/ComingSoon";
import WhyChooseUs from "./components/WhyChooseUs";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor";
import BrandBadge from "./components/BrandBadge";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col overflow-x-hidden">
      <CustomCursor />
      <Intro />

      {/* Spinning brand badge — fixed bottom-right */}
      <BrandBadge />
      <Header />
      {/* Centered content container */}
      <div className="mx-auto w-full max-w-[1230px] px-5 pt-[79px] sm:px-6">
        <Hero />
        <Partners />
        <WhyChooseUs />
      </div>
      <Services />
      <div className="mx-auto w-full max-w-[1230px] px-5 pb-6 sm:px-6 sm:pb-8">
        <Testimonials />
        <Benefits />
        <ComingSoon />
        <Faq />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
