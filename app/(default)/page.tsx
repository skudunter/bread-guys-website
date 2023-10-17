export const metadata = {
  title: "About | The Bread People",
  description: "Buy artisinal bread freshly made and delivered to your door",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Info from "@/components/info";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Info/>
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
