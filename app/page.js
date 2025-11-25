// app/page.js
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import PopularBooks from "@/components/Home/PopularBooks";
import Categories from "@/components/Home/Categories";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import FinalCTA from "@/components/Home/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularBooks />
      <Categories />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}