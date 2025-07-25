import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
