import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main>
      <div className='min-h-screen w-full relative'>
        <div
          className='absolute inset-0 z-0 hidden dark:block'
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
          }}
        />

        <div
          className='absolute inset-0 z-0 dark:hidden'
          style={{
            backgroundColor: "white",
          }}
        />

        <Header session={session} />
        <HeroSection />
        <div className='relative z-10'>
          <Features />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </main>
  );
}
